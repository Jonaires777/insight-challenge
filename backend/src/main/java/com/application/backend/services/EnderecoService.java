package com.application.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.backend.exceptions.DbException;
import com.application.backend.model.Endereco;
import com.application.backend.model.DTOs.EnderecoDTO;
import com.application.backend.repositories.EnderecoRepository;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository enderecoRepository;

    public Endereco createendereco(EnderecoDTO enderecoDTO) {
        Endereco endereco = dtoMapperToEntity(enderecoDTO);
        return enderecoRepository.save(endereco);
    }

    public List<Endereco> findAllenderecoes() {
        return enderecoRepository.findAll();
    }

    public Optional<Endereco> findByIdendereco(String id) {
        try {
            return enderecoRepository.findById(id);
        } catch (Exception e) {
            throw new DbException("endereco com id " + id + " nao foi encontrado");
        }
    }

    public Endereco updateEndereco(EnderecoDTO enderecoDTO) {
        Optional<Endereco> endereco = enderecoRepository.findById(enderecoDTO.getId());
        if (endereco.isPresent()) {
            Endereco newendereco = endereco.get();
            newendereco = updatEnderecoFromEnderecoDTO(newendereco, enderecoDTO);
            enderecoRepository.save(newendereco);
            return newendereco;
        } else {
            throw new DbException("O endereco com o id " + enderecoDTO.getId() + " nao foi encontrado");
        }
    }

    public void deleteEndereco(String id) {
        try {
            enderecoRepository.deleteById(id);
        } catch (Exception e) {
            throw new DbException("endereco com id " + id + " nao foi encontrado");
        }
    }

    private Endereco dtoMapperToEntity(EnderecoDTO enderecoDTO) {
        return Endereco.builder().bairro(enderecoDTO.getBairro()).cep(enderecoDTO.getCep())
                .cidade(enderecoDTO.getCidade()).complemento(enderecoDTO.getComplemento())
                .estado(enderecoDTO.getEstado()).id(enderecoDTO.getId()).numero(enderecoDTO.getNumero())
                .rua(enderecoDTO.getRua()).build();
    }

    private Endereco updatEnderecoFromEnderecoDTO(Endereco endereco, EnderecoDTO enderecoDTO) {

        endereco.setBairro(enderecoDTO.getBairro());
        endereco.setCep(enderecoDTO.getCep());
        endereco.setCidade(enderecoDTO.getCidade());
        endereco.setComplemento(enderecoDTO.getComplemento());
        endereco.setEstado(enderecoDTO.getEstado());
        endereco.setId(enderecoDTO.getId());
        endereco.setNumero(enderecoDTO.getNumero());
        endereco.setRua(enderecoDTO.getRua());

        return endereco;
    }

}
