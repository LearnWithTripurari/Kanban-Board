package com.kanban.backend.dto;

import lombok.Data;

@Data
public class TaskResDto {
    private Long id;
    private String title;
    private String description;
}
