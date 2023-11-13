package com.kanban.backend.dto;

import com.kanban.backend.model.Comment;
import lombok.Data;

@Data
public class TaskReqDto {
    private String title;
    private String description;
}
