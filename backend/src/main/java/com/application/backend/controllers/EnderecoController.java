package com.application.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.backend.model.Endereco;
import com.application.backend.model.DTOs.EnderecoDTO;
import com.application.backend.services.EnderecoService;

@RestController
@RequestMapping("/api/enderecos")
public class EnderecoController {

    @Autowired
    private EnderecoService enderecoService;

    @GetMapping
    public ResponseEntity<List<Endereco>> getAllenderecoes() {
        List<Endereco> enderecos = enderecoService.findAllenderecoes();
        return ResponseEntity.ok(enderecos);
    }

    @PostMapping
    public ResponseEntity<Endereco> createEndereco(EnderecoDTO enderecoDTO) {
        Endereco endereco = enderecoService.createendereco(enderecoDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(endereco);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Endereco> getEnderecoById(@PathVariable String id) {
        Optional<Endereco> endereco = enderecoService.findByIdendereco(id);
        if (endereco.isPresent()) {
            return ResponseEntity.ok(endereco.get());
        }
        return ResponseEntity.notFound().build();
    }
    
    @PutMapping
    public ResponseEntity<Endereco> updateEndereco(@RequestBody EnderecoDTO enderecoDTO) {
        Optional<Endereco> endereco = enderecoService.findByIdendereco(enderecoDTO.getId());
        if (endereco.isPresent()) {
            Endereco updatedendereco = enderecoService.updateEndereco(enderecoDTO);
            return ResponseEntity.ok(updatedendereco);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteEndereco(@PathVariable String id) {
        Optional<Endereco> endereco = enderecoService.findByIdendereco(id);
        if (endereco.isPresent()) {
            enderecoService.deleteEndereco(endereco.get().getId());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
