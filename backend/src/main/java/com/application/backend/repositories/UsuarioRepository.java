package com.application.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.application.backend.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String>{
    UserDetails findByName(String name);
}
