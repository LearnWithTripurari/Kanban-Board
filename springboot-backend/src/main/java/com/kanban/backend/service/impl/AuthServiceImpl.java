package com.kanban.backend.service.impl;

import com.kanban.backend.dto.LoginDto;
import com.kanban.backend.dto.RegisterDto;
import com.kanban.backend.exception.KanbanBoardException;
import com.kanban.backend.model.User;
import com.kanban.backend.model.UserRole;
import com.kanban.backend.repository.UserRepository;
import com.kanban.backend.repository.UserRoleRepository;
import com.kanban.backend.security.JwtTokenProvider;
import com.kanban.backend.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final UserRoleRepository userRoleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    public AuthServiceImpl(AuthenticationManager authenticationManager, UserRepository userRepository, UserRoleRepository userRoleRepository, PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.userRoleRepository = userRoleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public String login(LoginDto loginDto) {
        if (loginDto == null || loginDto.getEmail() == null || loginDto.getPassword() == null) {
            throw new IllegalArgumentException("Invalid LoginDto");
        }

        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

           Optional<User> userDetails = userRepository.findByEmail(loginDto.getEmail());

           String name = userDetails.map(User::getName).orElse("");

            return jwtTokenProvider.generateToken(authentication, name);
        }
        catch (AuthenticationException e) {
            throw new RuntimeException("Failed to authenticate", e);
        }
    }

    @Override
    public String register(RegisterDto registerDto) throws KanbanBoardException {

        if (registerDto == null || registerDto.getEmail() == null || registerDto.getPassword() == null) {
            throw new IllegalArgumentException("Email or Password cannot be empty");
        }

        if (userRepository.existsByEmail(registerDto.getEmail())) {
            throw new KanbanBoardException(HttpStatus.BAD_REQUEST, "Email is already exist.");
        }

        User user = new User();
        user.setName(registerDto.getName());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Set<UserRole> userRoles = new HashSet<>();
        userRoleRepository.findByName("ROLE_USER").ifPresent(userRoles::add);

        user.setRoles(userRoles);

        userRepository.save(user);

        return "User register successfully.";
    }
}