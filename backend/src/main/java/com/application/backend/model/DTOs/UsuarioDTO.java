package com.application.backend.model.DTOs;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UsuarioDTO {
    
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    
}
