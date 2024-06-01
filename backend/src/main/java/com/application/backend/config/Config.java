package com.application.backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import java.util.Date;

import com.application.backend.model.Endereco;
import com.application.backend.model.Fornecedor;
import com.application.backend.repositories.FornecedorRepository;

public class Config implements CommandLineRunner {

    @Autowired
    private FornecedorRepository fornecedorRepository;

    @Override
    public void run(String... args) throws Exception {

        fornecedorRepository.deleteAll();

        Endereco endereco1 = Endereco.builder().bairro("exemplo1 bairro").cep("6000000").cidade("cidade exemplo")
                .complemento("exemplo complemento").estado("exemplo estado").id("123").numero("456").rua("brihante")
                .build();
        Endereco endereco2 = Endereco.builder().bairro("bairro bonito").cep("6008787").cidade("cidade bonita")
                .complemento("complemento bonito").estado("estado bonito").id("456").numero("678").rua("bonita")
                .build();

        Fornecedor fornecedor1 = Fornecedor.builder().celular("8599999999").cnpjCpf("00000000000")
                .dataCadastro(new Date()).email("exemplo@exemplo.com").emailRepresentante("representante@exemplo.com")
                .endereco(endereco1).id("1").nome("Joaozinho").nomeRepresentante("Joaozinho")
                .produtosServicos("variados").segmentoAtuacao("Varejo").telefoneRepresentante("8598888888").build();
        
        Fornecedor fornecedor2 = Fornecedor.builder().celular("8599879999").cnpjCpf("00004564000")
                .dataCadastro(new Date()).email("exemplo2@exemplo.com").emailRepresentante("representante2@exemplo.com")
                .endereco(endereco2).id("2").nome("Mariazinha").nomeRepresentante("Mariazinha")
                .produtosServicos("variados").segmentoAtuacao("Varejo").telefoneRepresentante("8596676788").build();
        
        fornecedorRepository.save(fornecedor1);
        fornecedorRepository.save(fornecedor2);
    }

}
