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
        return Fornecedor.builder().celular(fornecedorDTO.getCelular()).cnpjCpf(fornecedorDTO.getCnpjCpf())
                .email(fornecedorDTO.getEmail()).endereco(fornecedorDTO.getEndereco()).nome(fornecedorDTO.getNome())
                .nomeRepresentante(fornecedorDTO.getNomeRepresentante())
                .produtosServicos(fornecedorDTO.getProdutosServicos()).dataCadastro(new Date().toString()).build();
    }

    private Fornecedor updateOldFornecedor(Fornecedor oldFornecedor, Fornecedor fornecedor) {

        oldFornecedor.setCelular(fornecedor.getCelular());
        oldFornecedor.setCnpjCpf(fornecedor.getCnpjCpf());
        oldFornecedor.setDataCadastro(new Date().toString());
        oldFornecedor.setEmail(fornecedor.getEmail());
        oldFornecedor.setEndereco(fornecedor.getEndereco());
        oldFornecedor.setNome(fornecedor.getNome());
        oldFornecedor.setNomeRepresentante(fornecedor.getNomeRepresentante());
        oldFornecedor.setProdutosServicos(fornecedor.getProdutosServicos());

        return oldFornecedor;
    }
}
