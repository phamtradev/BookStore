package com.phamtra.bookstore_backend.controller;

import com.phamtra.bookstore_backend.entity.NguoiDung;
import com.phamtra.bookstore_backend.service.NguoiDungService;
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
    public NguoiDung taoNguoiDung (@RequestBody NguoiDung nguoiDung) {
        NguoiDung nguoiDungMoi = this.nguoiDungService.taoNguoiDung(nguoiDung);
        return nguoiDungMoi;
    }

    @DeleteMapping("/users/{id}")
    public String xoaNguoiDung(@PathVariable("id") long id) {
        this.nguoiDungService.xoaNguoiDung(id);
        return "ok";
    }

    @GetMapping("/users/{id}")
    public NguoiDung getNguoiDungById(@PathVariable("id") long id) {
        return this.nguoiDungService.getNguoiDungById(id);
    }

    @GetMapping("/users")
    public List<NguoiDung> getAllNguoiDung() {
        return this.nguoiDungService.getAllNguoiDung();
    }

    @PutMapping("/users")
    public NguoiDung capNhatNguoiDung(@RequestBody NguoiDung nguoiDung) {
        NguoiDung nguoiDungMoi = this.nguoiDungService.capNhatNguoiDung(nguoiDung);
        return nguoiDungMoi;
    }
}
