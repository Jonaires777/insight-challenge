package com.application.backend.model.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FornecedorDTO {
    
    private String nome;
    private String cnpjCpf;
    private String email;
    private String celular;
    private String nomeRepresentante;
    private String produtosServicos;
    private String endereco;

}
