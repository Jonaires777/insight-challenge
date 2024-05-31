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

import com.application.backend.model.Fornecedor;
import com.application.backend.model.DTOs.FornecedorDTO;
import com.application.backend.services.FornecedorService;

@RestController
@RequestMapping("/api/fornecedores")
public class FornecedorController {

    @Autowired
    private FornecedorService fornecedorService;

    @GetMapping
    public ResponseEntity<List<Fornecedor>> getAllFornecedores() {
        List<Fornecedor> fornecedores = fornecedorService.findAllFornecedores();
        return ResponseEntity.ok(fornecedores);
    }

    @PostMapping
    public ResponseEntity<Fornecedor> createFornecedor(FornecedorDTO fornecedorDTO) {
        Fornecedor fornecedor = fornecedorService.createFornecedor(fornecedorDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(fornecedor);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Fornecedor> getFornecedorById(@PathVariable String id) {
        Optional<Fornecedor> fornecedor = fornecedorService.findByIdFornecedor(id);
        if (fornecedor.isPresent()) {
            return ResponseEntity.ok(fornecedor.get());
        }
        return ResponseEntity.notFound().build();
    }
    
    @PutMapping
    public ResponseEntity<Fornecedor> updateFornecedor(@RequestBody FornecedorDTO fornecedorDTO) {
        Optional<Fornecedor> fornecedor = fornecedorService.findByIdFornecedor(fornecedorDTO.getId());
        if (fornecedor.isPresent()) {
            Fornecedor updatedFornecedor = fornecedorService.updateFornecedor(fornecedorDTO);
            return ResponseEntity.ok(updatedFornecedor);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFornecedor(@PathVariable String id) {
        Optional<Fornecedor> fornecedor = fornecedorService.findByIdFornecedor(id);
        if (fornecedor.isPresent()) {
            fornecedorService.deleteFornecedor(fornecedor.get().getId());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
