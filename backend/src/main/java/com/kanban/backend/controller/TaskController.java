package com.kanban.backend.controller;

import com.kanban.backend.dto.TaskReqDto;
import com.kanban.backend.dto.TaskResDto;
import com.kanban.backend.dto.TaskWithCommentDto;
import com.kanban.backend.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }
    @GetMapping
    public List<TaskResDto> getAllTask() {
       return taskService.getAllTask();
    }

    @GetMapping("/withComments")
    public List<TaskWithCommentDto> getAllTaskWithComments() { return taskService.getAllTaskWithComments(); }

    @PostMapping
    public TaskResDto createTask(@RequestBody TaskReqDto taskReqDto) {
        return taskService.createTask(taskReqDto);
    }

    @PutMapping
    public TaskResDto updateTask(@RequestBody TaskReqDto taskReqDto) { return taskService.updateTask(taskReqDto); }
}
