package com.kanban.backend.exception;

import org.springframework.http.HttpStatus;

public class KanbanBoardException extends Exception {
    private final HttpStatus httpStatus;
    private final String message;

    public KanbanBoardException(HttpStatus httpStatus, String message) {
        this.httpStatus = httpStatus;
        this.message = message;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public String getMessage() {
        return message;
    }
}
