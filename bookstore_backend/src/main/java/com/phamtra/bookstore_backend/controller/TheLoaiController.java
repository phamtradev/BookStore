package com.phamtra.bookstore_backend.controller;

import com.phamtra.bookstore_backend.entity.TheLoai;
import com.phamtra.bookstore_backend.service.TheLoaiService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/theloai")
public class TheLoaiController {
    private final TheLoaiService theLoaiService;

    public TheLoaiController(TheLoaiService theLoaiService) {
        this.theLoaiService = theLoaiService;
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<?> findDanhSachTheLoaiByMaTheLoai(@PathVariable("id") Long id) {
        List<TheLoai> result = theLoaiService.findDanhSachTheLoaiByMaTheLoai(id);
        return ResponseEntity.ok(result);
    }
}

