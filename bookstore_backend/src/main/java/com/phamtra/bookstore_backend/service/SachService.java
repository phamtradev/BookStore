package com.phamtra.bookstore_backend.service;

import com.phamtra.bookstore_backend.entity.Sach;
import com.phamtra.bookstore_backend.repository.SachRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SachService {

    private final SachRepository sachRepository;

    public SachService(SachRepository sachRepository) {
        this.sachRepository = sachRepository;
    }

    public List<Sach> getAllSach(Pageable pageable) {
        Page<Sach> pageSach = this.sachRepository.findAll(pageable);
        return pageSach.getContent();
    }

    public Optional<Sach> getSachById(long id) {
        return this.sachRepository.findById(id);
    }

}
