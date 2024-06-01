package com.application.backend.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.application.backend.model.Usuario;
import com.application.backend.model.DTOs.UsuarioDTO;
import com.application.backend.repositories.UsuarioRepository;
import com.application.backend.services.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/login")
    public ResponseEntity login(@RequestParam String username, @RequestParam String password) {
        try {
            Authentication authentication = authService.authenticate(username, password);
            
            return ResponseEntity.ok().build();
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario ou senha invalidos");
        }
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody UsuarioDTO usuarioDTO) {
        if (this.usuarioRepository.findByName(usuarioDTO.getName()) != null) return ResponseEntity.badRequest().build();

        String hashedPassword = new BCryptPasswordEncoder().encode(usuarioDTO.getPassword());
        Usuario newUsuario = new Usuario(usuarioDTO.getId(), usuarioDTO.getName(), usuarioDTO.getEmail(), hashedPassword, new Date(), null);
        usuarioRepository.save(newUsuario);

        return ResponseEntity.ok().build();
    }
}
