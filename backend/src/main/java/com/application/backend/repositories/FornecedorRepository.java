package com.application.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.application.backend.model.Fornecedor;

public interface FornecedorRepository extends MongoRepository<Fornecedor, String> {
    
}
