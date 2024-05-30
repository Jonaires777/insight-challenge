package com.application.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.backend.model.Fornecedor;
import com.application.backend.repositories.FornecedorRepository;

@Service
public class FornecedorService {
    
    @Autowired
    private FornecedorRepository fornecedorRepository;

    // Irá receber um FornecedorDTO
    public Fornecedor createFornecedor() {
        return fornecedorRepository.save(null);
    }

    public List<Fornecedor> findAllFornecedores() {
        return fornecedorRepository.findAll();
    }

    public Optional<Fornecedor> findByIdFornecedor(String id) {
        return fornecedorRepository.findById(id);
    }

    // Irá receber um FornecedorDTO
    public Fornecedor updateFornecedor(String id, Fornecedor fornecedorDTO) {
        Optional<Fornecedor> fornecedor = fornecedorRepository.findById(null);
        
        // Atualizar o Fornecedor antigo com o Fornecedor atual

        return null;
    }

    // Tratar com exceções
    public Fornecedor deleteFornecedor(String id) {
        fornecedorRepository.deleteById(id);
        return null;
    }
}
