package com.application.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.application.backend.model.Endereco;

public interface EnderecoRepository extends MongoRepository<Endereco, String>{

}
