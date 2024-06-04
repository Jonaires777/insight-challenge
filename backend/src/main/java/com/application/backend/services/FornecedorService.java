package com.application.backend.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.backend.exceptions.DbException;
import com.application.backend.model.Fornecedor;
import com.application.backend.model.DTOs.FornecedorDTO;
import com.application.backend.repositories.FornecedorRepository;

@Service
public class FornecedorService {

    @Autowired
    private FornecedorRepository fornecedorRepository;

    public Fornecedor createFornecedor(FornecedorDTO fornecedorDTO) {
        Fornecedor fornecedor = dtoMapperToEntity(fornecedorDTO);
        return fornecedorRepository.save(fornecedor);
    }

    public List<Fornecedor> findAllFornecedores() {
        return fornecedorRepository.findAll();
    }

    public Optional<Fornecedor> findByIdFornecedor(String id) {
        try {
            return fornecedorRepository.findById(id);
        } catch (Exception e) {
            throw new DbException("Fornecedor com id " + id + " nao foi encontrado");
        }
    }

    public Fornecedor updateFornecedor(FornecedorDTO fornecedorDTO) {
        Optional<Fornecedor> fornecedor = fornecedorRepository.findById(fornecedorDTO.getId());
        if (fornecedor.isPresent()) {
            Fornecedor newFornecedor = fornecedor.get();
            newFornecedor = updatFornecedorFromFornecedorDTO(newFornecedor, fornecedorDTO);
            fornecedorRepository.save(newFornecedor);
            return newFornecedor;
        } else {
            throw new DbException("O fornecedor com o id " + fornecedorDTO.getId() + " nao foi encontrado");
        }
    }

    public void deleteFornecedor(String id) {
        try {
            fornecedorRepository.deleteById(id);
        } catch (Exception e) {
            throw new DbException("Fornecedor com id " + id + " nao foi encontrado");
        }
    }

    private Fornecedor dtoMapperToEntity(FornecedorDTO fornecedorDTO) {
        return Fornecedor.builder().id(fornecedorDTO.getId()).nome(fornecedorDTO.getNome())
                .celular(fornecedorDTO.getCelular()).cnpjCpf(fornecedorDTO.getCnpjCpf()).dataCadastro(new Date().toString())
                .email(fornecedorDTO.getEmail())
                .endereco("").nomeRepresentante(fornecedorDTO.getNomeRepresentante())
                .produtosServicos(fornecedorDTO.getProdutosServicos()).build();
    }

    private Fornecedor updatFornecedorFromFornecedorDTO(Fornecedor fornecedor, FornecedorDTO fornecedorDTO) {
        
        fornecedor.setId(fornecedorDTO.getId());
        fornecedor.setCelular(fornecedorDTO.getCelular());
        fornecedor.setCnpjCpf(fornecedorDTO.getCnpjCpf());
        fornecedor.setDataCadastro(new Date().toString());
        fornecedor.setEmail(fornecedorDTO.getEmail());
        fornecedor.setEndereco(fornecedorDTO.getEndereco());
        fornecedor.setId(fornecedorDTO.getId());
        fornecedor.setNome(fornecedorDTO.getNome());
        fornecedor.setNomeRepresentante(fornecedorDTO.getNomeRepresentante());
        fornecedor.setProdutosServicos(fornecedorDTO.getProdutosServicos());

        return fornecedor;
    }
}
