package com.kanban.backend.service.impl;

import com.kanban.backend.dto.CommentDto;
import com.kanban.backend.dto.TaskReqDto;
import com.kanban.backend.dto.TaskResDto;
import com.kanban.backend.dto.TaskWithCommentDto;
import com.kanban.backend.model.Comment;
import com.kanban.backend.model.Task;
import com.kanban.backend.repository.TaskRepository;
import com.kanban.backend.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public TaskResDto createTask(TaskReqDto taskReqDto) {
        // Map to Model
        Task task = mapToModel(taskReqDto);
        Task newTask = taskRepository.save(task);

        // Map to Dto
        return mapToDto(newTask);
    }

    @Override
    public List<TaskResDto> getAllTask() {
       List<Task> tasks = taskRepository.findAll();
       return tasks.stream().map(this::mapToDto).toList();
    }

    public List<TaskWithCommentDto> getAllTaskWithComments() {
        List<Task> tasks = taskRepository.findAll();
        return tasks.stream().map(this::mapToTaskWithCommentDto).toList();
    }

    @Override
    public TaskResDto getTaskById(Long id) {
        return null;
    }

    @Override
    public TaskResDto updateTask(TaskReqDto taskReqDto) {
        // Map to Model
        Task task = mapToModel(taskReqDto);
        Task newTask = taskRepository.save(task);

        // Map to Dto
        return mapToDto(newTask);
    }





    /************************************ Mapping Functions **********************************************/

    // Convert Dto to Model (Entity)
    private Task mapToModel(TaskReqDto taskReqDto) {
        Task task = new Task();
        task.setTitle(taskReqDto.getTitle());
        task.setDescription(taskReqDto.getDescription());
        return task;
    }

    // Convert Model to Dto
    private TaskResDto mapToDto(Task task) {
        TaskResDto taskResDto = new TaskResDto();
        taskResDto.setId(task.getId());
        taskResDto.setTitle(task.getTitle());
        taskResDto.setDescription(task.getDescription());
        return taskResDto;
    }

    private TaskWithCommentDto mapToTaskWithCommentDto(Task task) {
        TaskWithCommentDto taskWithCommentDto = new TaskWithCommentDto();
        taskWithCommentDto.setId(task.getId());
        taskWithCommentDto.setTitle(task.getTitle());
        taskWithCommentDto.setDescription(task.getDescription());

        List<CommentDto> commentsDto = task.getComments().stream()
                .map(this::mapCommentToDto)
                .toList();

        taskWithCommentDto.setComments(commentsDto);
        return taskWithCommentDto;
    }

    private CommentDto mapCommentToDto(Comment comment) {
        CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setText(comment.getText());
        return commentDto;
    }
}
