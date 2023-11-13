package com.kanban.backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class TaskWithCommentDto {
    private Long id;
    private String title;
    private String description;
    private List<CommentDto> comments;
}
