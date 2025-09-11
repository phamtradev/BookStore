package com.phamtra.bookstore_backend.controller;

import com.phamtra.bookstore_backend.entity.Sach;
import com.phamtra.bookstore_backend.service.SachService;
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
        String sCurrent = currentOptional.isPresent() ? currentOptional.get() : "1";
        String sPageSize = pagesizeOptional.isPresent() ? pagesizeOptional.get() : "10";
        int current = Integer.parseInt(sCurrent) - 1;
        int pageSize = Integer.parseInt(sPageSize);
        Pageable pageable = PageRequest.of(current, pageSize);
        return ResponseEntity.ok().body(this.sachService.getAllSach(pageable));
    }

    @GetMapping("/sachs/{id}")
    public ResponseEntity<?> getSachById(@PathVariable("id") long id) {
        Optional<Sach> sachOptional = this.sachService.getSachById(id);
        return ResponseEntity.ok().body(sachOptional.get());
    }
}
