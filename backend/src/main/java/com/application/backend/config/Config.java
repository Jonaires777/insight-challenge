package com.application.backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.Date;

import com.application.backend.model.Fornecedor;
import com.application.backend.repositories.FornecedorRepository;
import com.github.javafaker.Faker;

@Configuration
public class Config implements CommandLineRunner {

        @Autowired
        private FornecedorRepository fornecedorRepository;

        @Override
        public void run(String... args) throws Exception {

                fornecedorRepository.deleteAll();

                Faker faker = new Faker();

                for (int i = 0; i < 1000; i++) {
                        String name = String.valueOf(faker.name().name());
                        String celular = String.valueOf(faker.phoneNumber().cellPhone());
                        String cnpjCString = String.valueOf(faker.number().randomNumber(11, false));
                        String produtos = String.valueOf(faker.commerce().department());
                        String email = String.valueOf(faker.numerify("exe##mplo##@exemplo.com"));
                        String endereco = String.valueOf(faker.address().city() + " " + "" + faker.address().state());

                        Fornecedor fornecedor = Fornecedor.builder().celular(celular).cnpjCpf(cnpjCString)
                                        .dataCadastro(new Date().toString()).email(email)
                                        .endereco(endereco).nome(name).nomeRepresentante(name)
                                        .produtosServicos(produtos).build();

                        fornecedorRepository.save(fornecedor);
                }

        }

}
