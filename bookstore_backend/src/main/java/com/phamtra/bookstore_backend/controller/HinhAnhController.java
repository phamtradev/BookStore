package com.phamtra.bookstore_backend.controller;

import com.phamtra.bookstore_backend.entity.HinhAnh;
import com.phamtra.bookstore_backend.exception.IdInvalidException;
import com.phamtra.bookstore_backend.service.HinhAnhService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class HinhAnhController {

    private final HinhAnhService hinhAnhService;

    public HinhAnhController(HinhAnhService hinhAnhService) {
        this.hinhAnhService = hinhAnhService;
    }

    @PostMapping("/hinhanhs")
    public ResponseEntity<?> taoHinhAnh(@RequestBody HinhAnh hinhAnh) {
        HinhAnh hinhAnhMoi = this.hinhAnhService.taoHinhAnh(hinhAnh);
        return ResponseEntity.ok().body(hinhAnhMoi);
    }

    @DeleteMapping("/hinhanhs/{id}")
    public ResponseEntity<?> xoaHinhAnh(@PathVariable("id") long id) throws IdInvalidException {
        if (id > 1500) {
            throw new IdInvalidException("Id ko lon hon 1500");
        }
        this.hinhAnhService.xoaHinhAnh(id);
        return ResponseEntity.ok().body("success");
    }

    @GetMapping("/hinhanhs/{id}")
    public ResponseEntity<?> getHinhAnhById(@PathVariable("id") long id) {
        HinhAnh hinhAnh = this.hinhAnhService.getHinhAnhById(id);
        return ResponseEntity.ok().body(hinhAnh);
    }

    @GetMapping("/hinhanhs")
    public ResponseEntity<?> getAllHinhAnh() {
        List<HinhAnh> danhSachHinhAnh = this.hinhAnhService.getAllHinhAnh();
        return ResponseEntity.ok().body(danhSachHinhAnh);
    }

//    @PutMapping("/users")
//    public ResponseEntity<?> capNhatHinhAnh(@RequestBody HinhAnh hinhAnh) {
//        HinhAnh hinhAnhMoi = this.hinhAnhService.capNhatHinhAnh(hinhAnh);
//        return ResponseEntity.ok().body(hinhAnhMoi);
//    }
}
