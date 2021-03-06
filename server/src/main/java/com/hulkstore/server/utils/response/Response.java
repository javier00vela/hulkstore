package com.hulkstore.server.utils.response;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class Response {

    private static String message;
    private static HttpStatus status = HttpStatus.OK;
    private static HashMap<String, ?> data;

    public static void setMessage(String messageParam) {
        message = messageParam;
    }

    public static void setStatus(HttpStatus statusParam) {
        status = statusParam;
    }

    public static void setData(HashMap<String, ?> dataParam) {
        data = dataParam;
    }

    public static ResponseEntity<HashMap> dispatch() {
        HashMap<String, Object> response = new HashMap<>();
        response.put("data", data);
        response.put("message", message);
        return new ResponseEntity<HashMap>(response, status);
    }

}
