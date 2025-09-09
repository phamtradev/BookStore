package com.phamtra.bookstore_backend.repository;

import com.phamtra.bookstore_backend.entity.Sach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SachRepository extends JpaRepository<Sach, Long> {
}
