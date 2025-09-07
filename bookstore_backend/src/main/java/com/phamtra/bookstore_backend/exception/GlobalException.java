package com.phamtra.bookstore_backend.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {

    @ExceptionHandler(value = IdInvalidException.class)
    public ResponseEntity<?> handleIdException(IdInvalidException idInvalidException) {
        return ResponseEntity.badRequest().body(idInvalidException.getMessage());
    }
}
