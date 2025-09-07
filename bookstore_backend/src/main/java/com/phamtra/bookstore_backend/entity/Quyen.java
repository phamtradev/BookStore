package com.phamtra.bookstore_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "quyen")
@Data
public class Quyen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long maQuyen;
    private String tenQuyen;
    private List<NguoiDung> danhSachNguoiDung;
}
