package com.kanban.backend.service;

import com.kanban.backend.dto.TaskReqDto;
import com.kanban.backend.dto.TaskResDto;
import com.kanban.backend.dto.TaskWithCommentDto;

import java.util.List;

public interface TaskService {
    TaskResDto createTask(TaskReqDto taskReqDto);
    List<TaskResDto> getAllTask();

    List<TaskWithCommentDto> getAllTaskWithComments();
    TaskResDto getTaskById(Long id);
    TaskResDto updateTask(TaskReqDto taskReqDto);
}
