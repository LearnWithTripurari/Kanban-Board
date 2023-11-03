package com.kanban.backend.service.impl;

import com.kanban.backend.dto.TaskReqDto;
import com.kanban.backend.dto.TaskResDto;
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
       return tasks.stream().map(task -> mapToDto(task)).toList();
    }

    @Override
    public TaskResDto getTaskById(long id) {
        return null;
    }


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
}
