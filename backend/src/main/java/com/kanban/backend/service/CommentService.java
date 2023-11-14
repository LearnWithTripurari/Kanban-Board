package com.kanban.backend.service;

import com.kanban.backend.dto.CommentDto;

import java.util.List;

public interface CommentService {

    CommentDto createComment(Long taskId, CommentDto commentDto);

    List<CommentDto> getCommentsByTaskId(Long taskId);

}
