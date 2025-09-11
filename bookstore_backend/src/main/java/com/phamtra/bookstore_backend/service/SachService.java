package com.phamtra.bookstore_backend.service;

import com.phamtra.bookstore_backend.entity.Sach;
import com.phamtra.bookstore_backend.repository.SachRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SachService {

    private final SachRepository sachRepository;

    public SachService(SachRepository sachRepository) {
        this.sachRepository = sachRepository;
    }

    public Page<Sach> getAllSach(Pageable pageable) {
        return this.sachRepository.findAll(pageable);
    }

    public Optional<Sach> getSachById(long id) {
        return this.sachRepository.findById(id);
    }

}
