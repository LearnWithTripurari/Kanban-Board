package com.kanban.backend.service.impl;

import com.kanban.backend.dto.CommentDto;
import com.kanban.backend.model.Comment;
import com.kanban.backend.model.Task;
import com.kanban.backend.repository.CommentRepository;
import com.kanban.backend.repository.TaskRepository;
import com.kanban.backend.service.CommentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final TaskRepository taskRepository;

    public CommentServiceImpl(CommentRepository commentRepository, TaskRepository taskRepository) {
        this.commentRepository = commentRepository;
        this.taskRepository = taskRepository;
    }

    @Override
    public CommentDto createComment(Long id, CommentDto commentDto) {
        Comment comment = mapToModel(commentDto);

        Task task = taskRepository.findById(id).orElseThrow(()-> new RuntimeException("This task doest not exist!"));

        // set task to comment entity
        comment.setTask(task);
        // save comment to the database
        Comment newComment = commentRepository.save(comment);

        return mapToDto(newComment);
    }

    @Override
    public List<CommentDto> getCommentsByTaskId(Long taskId) {
        List<Comment> comments = commentRepository.findByTaskId(taskId);
        return comments.stream().map(this::mapToDto).toList();
    }


    // Model to Dto
    private CommentDto mapToDto(Comment comment) {
        CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setText(comment.getText());

        return commentDto;
    }

    // Dto to Model
    private Comment mapToModel(CommentDto commentDto) {
        Comment comment = new Comment();
        comment.setId(commentDto.getId());
        comment.setText(commentDto.getText());

        return comment;
    }

}
