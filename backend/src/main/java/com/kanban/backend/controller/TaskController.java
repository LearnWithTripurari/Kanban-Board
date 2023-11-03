package com.kanban.backend.controller;

import com.kanban.backend.dto.TaskReqDto;
import com.kanban.backend.dto.TaskResDto;
import com.kanban.backend.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }
    @GetMapping
    public List<TaskResDto> getAllTask() {
       return taskService.getAllTask();
    }

    @PostMapping
    public TaskResDto createTask(@RequestBody TaskReqDto taskReqDto) {
        return taskService.createTask(taskReqDto);
    }
}
