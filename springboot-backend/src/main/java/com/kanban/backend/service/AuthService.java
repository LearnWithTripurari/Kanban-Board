package com.kanban.backend.service;

import com.kanban.backend.dto.LoginDto;
import com.kanban.backend.dto.RegisterDto;
import com.kanban.backend.exception.KanbanBoardException;

public interface AuthService {
    String login(LoginDto loginDto);
    String register(RegisterDto registerDto) throws KanbanBoardException;
}
