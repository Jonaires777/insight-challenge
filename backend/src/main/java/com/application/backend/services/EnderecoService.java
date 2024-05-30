package com.application.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.backend.model.Endereco;
import com.application.backend.repositories.EnderecoRepository;

@Service
public class EnderecoService {
    
    @Autowired
    private EnderecoRepository enderecoRepository;

    // Irá receber um EnderecoDTO
    public Endereco createEndereco() {
        return enderecoRepository.save(null);
    }

    public List<Endereco> findAllEnderecoes() {
        return enderecoRepository.findAll();
    }

    public Optional<Endereco> findByIdEndereco(String id) {
        return enderecoRepository.findById(id);
    }

    // Irá receber um EnderecoDTO
    public Endereco updateEndereco(String id, Endereco enderecoDTO) {
        Optional<Endereco> endereco = enderecoRepository.findById(null);
        
        // Atualizar o endereco antigo com o endereco atual

        return null;
    }

    // Tratar com exceções
    public Endereco deleteEndereco(String id) {
        enderecoRepository.deleteById(id);
        return null;
    }

}
