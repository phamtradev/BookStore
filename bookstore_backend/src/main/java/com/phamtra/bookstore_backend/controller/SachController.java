package com.phamtra.bookstore_backend.controller;

import com.phamtra.bookstore_backend.entity.Sach;
import com.phamtra.bookstore_backend.service.SachService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class SachController {

    private final SachService sachService;

    public SachController(SachService sachService) {
        this.sachService = sachService;
    }

    @GetMapping("/sachs")
    public ResponseEntity<?> getAllSach(
            @RequestParam("current") Optional<String> currentOptional,
            @RequestParam("pageSize") Optional<String> pagesizeOptional) {
        String sCurrent = currentOptional.orElse("1");
        String sPageSize = pagesizeOptional.orElse("10");
        int current = 1;
        int pageSize = 10;
        try {
            current = Integer.parseInt(sCurrent);
            pageSize = Integer.parseInt(sPageSize);
        } catch (NumberFormatException e) {
            current = 1;
            pageSize = 10;
        }
        Pageable pageable = PageRequest.of(current - 1, pageSize);
        Page<Sach> page = this.sachService.getAllSach(pageable);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/sachs/{id}")
    public ResponseEntity<?> getSachById(@PathVariable("id") long id) {
        Optional<Sach> sachOptional = this.sachService.getSachById(id);
        return ResponseEntity.ok().body(sachOptional.get());
    }

    @GetMapping("/sachs/search")
    public ResponseEntity<?> searchSachByTenSach(
            @RequestParam("tenSach") String tenSach,
            @RequestParam("current") Optional<String> currentOptional,
            @RequestParam("pageSize") Optional<String> pageSizeOptional) {
        String sCurrent = currentOptional.orElse("1");
        String sPageSize = pageSizeOptional.orElse("10");
        int current = 1;
        int pageSize = 10;
        try {
            current = Integer.parseInt(sCurrent);
            pageSize = Integer.parseInt(sPageSize);
        } catch (NumberFormatException e) {
            current = 1;
            pageSize = 10;
        }
        Pageable pageable = PageRequest.of(current - 1, pageSize);
        Page<Sach> page = sachService.searchSachByTenSach(tenSach, pageable);
        return ResponseEntity.ok(page);
    }
}
