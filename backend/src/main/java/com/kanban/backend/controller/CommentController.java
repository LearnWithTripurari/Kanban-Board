package com.kanban.backend.controller;

import com.kanban.backend.dto.CommentDto;
import com.kanban.backend.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/{taskId}/comments")
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto commentDto, @PathVariable(value = "taskId") Long taskId) {
        return new ResponseEntity<>(commentService.createComment(taskId, commentDto), HttpStatus.CREATED);
    }

    @GetMapping("/{taskId}/comments")
    public List<CommentDto> getCommentsByTaskId(@PathVariable(value = "taskId") Long taskId) {
        return commentService.getCommentsByTaskId(taskId);
    }

}
