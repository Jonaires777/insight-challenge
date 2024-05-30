package com.application.backend.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "fornecedor_entidade")
public class Fornecedor {
    
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
    private Date dataCadastro;
    private Endereco endereco;
    
}
