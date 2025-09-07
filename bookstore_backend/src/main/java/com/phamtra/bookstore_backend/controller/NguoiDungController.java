package com.phamtra.bookstore_backend.controller;

import com.phamtra.bookstore_backend.entity.NguoiDung;
import com.phamtra.bookstore_backend.exception.IdInvalidException;
import com.phamtra.bookstore_backend.service.NguoiDungService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class NguoiDungController {

    private final NguoiDungService nguoiDungService;

    public NguoiDungController(NguoiDungService nguoiDungService) {
        this.nguoiDungService = nguoiDungService;
    }

    @PostMapping("/users")
    public ResponseEntity<?> taoNguoiDung (@RequestBody NguoiDung nguoiDung) {
        NguoiDung nguoiDungMoi = this.nguoiDungService.taoNguoiDung(nguoiDung);
        return ResponseEntity.ok().body(nguoiDungMoi);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> xoaNguoiDung(@PathVariable("id") long id) throws IdInvalidException {
        if (id > 1500) {
            throw new IdInvalidException("Id ko lon hon 1500");
        }
        this.nguoiDungService.xoaNguoiDung(id);
        return ResponseEntity.ok().body("success");
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> getNguoiDungById(@PathVariable("id") long id) {
        NguoiDung nguoiDung = this.nguoiDungService.getNguoiDungById(id);
        return ResponseEntity.ok().body(nguoiDung);
    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllNguoiDung() {
        List<NguoiDung> danhSachNguoiDung = this.nguoiDungService.getAllNguoiDung();
        return ResponseEntity.ok().body(danhSachNguoiDung);
    }

    @PutMapping("/users")
    public ResponseEntity<?> capNhatNguoiDung(@RequestBody NguoiDung nguoiDung) {
        NguoiDung nguoiDungMoi = this.nguoiDungService.capNhatNguoiDung(nguoiDung);
        return ResponseEntity.ok().body(nguoiDungMoi);
    }
}
