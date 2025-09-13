package com.phamtra.bookstore_backend.repository;

import com.phamtra.bookstore_backend.entity.TheLoai;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TheLoaiRepository extends JpaRepository<TheLoai, Long> {
    List<TheLoai> findByMaTheLoai(Long maTheLoai);
}

