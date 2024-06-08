package com.application.backend.model;

import java.io.Serializable;
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
public class Fornecedor implements Serializable {
    
    @Id
    private String id;
    private String nome;
    private String cnpjCpf;
    private String email;
    private String celular;
    private String nomeRepresentante;
    private String produtosServicos;
    private String dataCadastro;
    private String endereco;
    
    public Fornecedor(String nome, String cnpjCpf, String email, String celular, String nomeRepresentante, String produtosServicos, String endereco){
        this.nome = nome;
        this.cnpjCpf = cnpjCpf;
        this.dataCadastro = new Date().toString();
        this.celular = celular;
        this.email = email;
        this.endereco = endereco;
        this.nomeRepresentante = nomeRepresentante;
        this.produtosServicos = produtosServicos;
    }
}
