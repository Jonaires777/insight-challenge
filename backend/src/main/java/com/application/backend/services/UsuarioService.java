package com.application.backend.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.backend.exceptions.DbException;
import com.application.backend.model.Usuario;
import com.application.backend.model.DTOs.UsuarioDTO;
import com.application.backend.repositories.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario createusuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = dtoMapperToEntity(usuarioDTO);
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> findAllusuarioes() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> findByIdusuario(String id) {
        try {
            return usuarioRepository.findById(id);
        } catch (Exception e) {
            throw new DbException("usuario com id " + id + " nao foi encontrado");
        }
    }

    public Usuario updateusuario(UsuarioDTO usuarioDTO) {
        Optional<Usuario> usuario = usuarioRepository.findById(usuarioDTO.getId());
        if (usuario.isPresent()) {
            Usuario newusuario = usuario.get();
            newusuario = updatUsuarioFromUsuarioDTO(newusuario, usuarioDTO);
            usuarioRepository.save(newusuario);
            return newusuario;
        } else {
            throw new DbException("O usuario com o id " + usuarioDTO.getId() + " nao foi encontrado");
        }
    }

    public void deleteusuario(String id) {
        try {
            usuarioRepository.deleteById(id);
        } catch (Exception e) {
            throw new DbException("usuario com id " + id + " nao foi encontrado");
        }
    }

    private Usuario dtoMapperToEntity(UsuarioDTO usuarioDTO) {
        return Usuario.builder().id(usuarioDTO.getId()).email(usuarioDTO.getEmail()).name(usuarioDTO.getName())
                .password(usuarioDTO.getPassword()).created(new Date()).fornecedores(null).build();
    }

    private Usuario updatUsuarioFromUsuarioDTO(Usuario usuario, UsuarioDTO usuarioDTO) {

        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setCreated(new Date());
        usuario.setId(usuarioDTO.getId());
        usuario.setName(usuarioDTO.getName());
        usuario.setPassword(usuarioDTO.getPassword());

        return usuario;
    }
}
