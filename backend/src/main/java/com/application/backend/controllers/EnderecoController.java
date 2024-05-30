package com.application.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.backend.services.EnderecoService;

@RestController
public class EnderecoController {

    @Autowired
    private EnderecoService enderecoService;


}
