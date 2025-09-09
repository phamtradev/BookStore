package com.phamtra.bookstore_backend.controller;

import com.phamtra.bookstore_backend.entity.Sach;
import com.phamtra.bookstore_backend.service.SachService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class SachController {

    private final SachService sachService;

    public SachController(SachService sachService) {
        this.sachService = sachService;
    }

    @GetMapping("/sachs")
    public ResponseEntity<?> getAllSach() {
        List<Sach> danhSachSach = this.sachService.getAllSach();
        return ResponseEntity.ok().body(danhSachSach);
    }

    @GetMapping("/sachs/{id}")
    public ResponseEntity<?> getSachById(@PathVariable("id") long id) {
        Optional<Sach> sachOptional = this.sachService.getSachById(id);
        return ResponseEntity.ok().body(sachOptional.get());
    }
}
