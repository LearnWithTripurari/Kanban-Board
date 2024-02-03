package com.kanban.backend.dto;

import com.kanban.backend.model.Comment;
import lombok.Data;

import java.util.List;

@Data
public class TaskResDto {
    private Long id;
    private String title;
    private String description;
}
