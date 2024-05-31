package com.application.backend.model.DTOs;

import org.springframework.data.annotation.Id;

import com.application.backend.model.Endereco;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FornecedorDTO {
    
    @Id
    private String id;
    private String nome;
    private String cnpjCpf;
    private String email;
    private String celular;
    private String nomeRepresentante;
    private String telefoneRepresentante;
    private String emailRepresentante;
    private String segmentoAtuacao;
    private String produtosServicos;
    private Endereco endereco;

}
