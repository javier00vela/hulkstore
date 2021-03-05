package com.hulkstore.server.controller;

import java.util.HashSet;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {

    @GetMapping(name = "/")
    public HashSet<String> index() {
        HashSet<String> response = new HashSet<String>();
        response.add("Welcome Hulk Store API service v1.0!");
        return response;
    }

}
