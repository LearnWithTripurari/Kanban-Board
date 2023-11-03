package com.kanban.backend.service;

import com.kanban.backend.dto.TaskReqDto;
import com.kanban.backend.dto.TaskResDto;

import java.util.List;

public interface TaskService {
    TaskResDto createTask(TaskReqDto taskReqDto);
    List<TaskResDto> getAllTask();
    TaskResDto getTaskById(long id);
}
