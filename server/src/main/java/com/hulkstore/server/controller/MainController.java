package com.hulkstore.server.controller;

import java.util.HashSet;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping(name = "/")
    public HashSet<String> main() {
        HashSet<String> response = new HashSet<String>();
        response.add("Welcome Hulk Store API service v1.0!");
        return response;
    }

}
