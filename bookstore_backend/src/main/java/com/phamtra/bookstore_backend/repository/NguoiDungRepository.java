package com.phamtra.bookstore_backend.repository;

import com.phamtra.bookstore_backend.entity.NguoiDung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NguoiDungRepository extends JpaRepository<NguoiDung, Long> {

    boolean existsByEmail(String email);

    boolean existsByTenDangNhap(String tenDangNhap);
}
