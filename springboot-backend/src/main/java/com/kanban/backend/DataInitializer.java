package com.kanban.backend;

import com.kanban.backend.model.UserRole;
import com.kanban.backend.repository.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

   @Autowired
   private UserRoleRepository userRoleRepository;
    @Override
    public void run(String... args) throws Exception {

        if (userRoleRepository.findByName("ROLE_USER").isEmpty()) {
            UserRole role = new UserRole("USER_ROLE");
            userRoleRepository.save(role);
        }
    }
}
