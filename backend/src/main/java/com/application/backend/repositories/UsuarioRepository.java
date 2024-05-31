package com.application.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.application.backend.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String>{

}
