package com.phamtra.bookstore_backend.service;

import com.phamtra.bookstore_backend.entity.HinhAnh;
import com.phamtra.bookstore_backend.repository.HinhAnhRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HinhAnhService {
    private final HinhAnhRepository hinhAnhRepository;

    public HinhAnhService(HinhAnhRepository hinhAnhRepository) {
        this.hinhAnhRepository = hinhAnhRepository;
    }

    public HinhAnh taoHinhAnh(HinhAnh hinhAnh) {
        return this.hinhAnhRepository.save(hinhAnh);
    }

    public void xoaHinhAnh(long id) {
        this.hinhAnhRepository.deleteById(id);
    }

    public HinhAnh getHinhAnhById(long id) {
        Optional<HinhAnh> hinhAnhOptional = this.hinhAnhRepository.findById(id);
        if (hinhAnhOptional.isPresent()) {
            return hinhAnhOptional.get();
        }
        return null;
    }

    public List<HinhAnh> getAllHinhAnh() {
        return this.hinhAnhRepository.findAll();
    }
}
