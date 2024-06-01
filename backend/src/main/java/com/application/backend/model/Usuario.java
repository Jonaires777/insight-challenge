package com.application.backend.model;

import java.util.Date;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "usuario_entidade")
public class Usuario {
    
    private String id;
    private String name;
    private String email;
    private String password;
    private Date created;

    @DBRef
    @Builder.Default
    private List<Fornecedor> fornecedores = null;

}
