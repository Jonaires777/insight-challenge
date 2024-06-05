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

    public Fornecedor updateFornecedor(Fornecedor fornecedor) {
        Optional<Fornecedor> oldFornecedor = fornecedorRepository.findById(fornecedor.getId());
        if (oldFornecedor.isPresent()) {
            Fornecedor updatedFornecedor = updateOldFornecedor(oldFornecedor.get(), fornecedor);
            fornecedorRepository.save(updatedFornecedor);
            return updatedFornecedor;
        } else {
            throw new DbException("O fornecedor com o id " + fornecedor.getId() + " nao foi encontrado");
        }
    }

    public void deleteFornecedor(String id) {
        try {
            fornecedorRepository.deleteById(id);
        } catch (Exception e) {
            throw new DbException("Fornecedor com id " + id + " nao foi encontrado");
        }
    }

    public Fornecedor dtoMapperToEntity(FornecedorDTO fornecedorDTO) {
        return Fornecedor.builder().id(fornecedorDTO.getId()).nome(fornecedorDTO.getNome())
                .celular(fornecedorDTO.getCelular()).cnpjCpf(fornecedorDTO.getCnpjCpf())
                .dataCadastro(new Date().toString())
                .email(fornecedorDTO.getEmail())
                .endereco(fornecedorDTO.getEndereco()).nomeRepresentante(fornecedorDTO.getNomeRepresentante())
                .produtosServicos(fornecedorDTO.getProdutosServicos()).build();
    }

    private Fornecedor updateOldFornecedor(Fornecedor newfornecedor, Fornecedor fornecedor) {

        newfornecedor.setCelular(fornecedor.getCelular());
        newfornecedor.setCnpjCpf(fornecedor.getCnpjCpf());
        newfornecedor.setDataCadastro(new Date().toString());
        newfornecedor.setEmail(fornecedor.getEmail());
        newfornecedor.setEndereco(fornecedor.getEndereco());
        newfornecedor.setNome(fornecedor.getNome());
        newfornecedor.setNomeRepresentante(fornecedor.getNomeRepresentante());
        newfornecedor.setProdutosServicos(fornecedor.getProdutosServicos());

        return fornecedor;
    }
}
