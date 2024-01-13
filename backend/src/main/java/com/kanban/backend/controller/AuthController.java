package com.kanban.backend.controller;

import com.kanban.backend.dto.JwtResDto;
import com.kanban.backend.dto.LoginDto;
import com.kanban.backend.dto.RegisterDto;
import com.kanban.backend.exception.KanbanBoardException;
import com.kanban.backend.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping(value = {"/login", "/signin"})
    public ResponseEntity<JwtResDto> login(@RequestBody LoginDto loginDto) {

        String token = authService.login(loginDto);
        JwtResDto jwtResDto = new JwtResDto();
        jwtResDto.setAccessToken(token);

        return ResponseEntity.ok(jwtResDto);
    }

    @PostMapping(value = {"/register", "/signup"})
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) throws KanbanBoardException {
        String response = authService.register(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
