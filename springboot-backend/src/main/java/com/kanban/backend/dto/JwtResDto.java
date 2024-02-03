package com.kanban.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtResDto {
    private String accessToken;
    private String tokenType = "Bearer";
}
