package com.application.backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.Date;

import com.application.backend.model.Fornecedor;
import com.application.backend.repositories.FornecedorRepository;

@Configuration
public class Config implements CommandLineRunner {

        @Autowired
        private FornecedorRepository fornecedorRepository;

        @Override
        public void run(String... args) throws Exception {

                fornecedorRepository.deleteAll();


                Fornecedor fornecedor1 = Fornecedor.builder().celular("8599999999").cnpjCpf("00000000000")
                                .dataCadastro(new Date().toString()).email("exemplo@exemplo.com")
                                .endereco("exempl1").id("1").nome("Joaozinho").nomeRepresentante("Joaozinho")
                                .produtosServicos("variados").build();

                Fornecedor fornecedor2 = Fornecedor.builder().celular("8599879999").cnpjCpf("00004564000")
                                .dataCadastro(new Date().toString()).email("exemplo2@exemplo.com")
                                .endereco("endereco2").id("2").nome("Mariazinha").nomeRepresentante("Mariazinha")
                                .produtosServicos("variados").build();

                fornecedorRepository.save(fornecedor1);
                fornecedorRepository.save(fornecedor2);
        }

}
