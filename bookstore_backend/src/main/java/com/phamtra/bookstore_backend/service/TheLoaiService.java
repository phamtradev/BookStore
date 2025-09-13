package com.phamtra.bookstore_backend.service;

import com.phamtra.bookstore_backend.entity.TheLoai;
import com.phamtra.bookstore_backend.repository.TheLoaiRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheLoaiService {
    private final TheLoaiRepository theLoaiRepository;

    public TheLoaiService(TheLoaiRepository theLoaiRepository) {
        this.theLoaiRepository = theLoaiRepository;
    }

    public List<TheLoai> findDanhSachTheLoaiByMaTheLoai(Long maTheLoai) {
        return theLoaiRepository.findByMaTheLoai(maTheLoai);
    }

    public List<TheLoai> getAllTheLoai() {
        return theLoaiRepository.findAll();
    }
}
