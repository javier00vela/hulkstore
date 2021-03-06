package com.hulkstore.server.controller;

import java.util.HashMap;
import java.util.HashSet;

import javax.servlet.http.HttpServletRequest;

import com.hulkstore.server.model.User;
import com.hulkstore.server.utils.response.Response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @RequestMapping(value = "/user/auth", method = RequestMethod.POST)
    public ResponseEntity<HashMap> authData(HttpServletRequest request) {
        HashMap<String, String> map = new HashMap<>();
        Response.setData(map);
        Response.setStatus(HttpStatus.BAD_GATEWAY);
        Response.setMessage("este es un message");
        return Response.dispatch();
    }

}
