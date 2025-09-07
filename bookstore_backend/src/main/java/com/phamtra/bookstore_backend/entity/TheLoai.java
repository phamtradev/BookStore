package com.phamtra.bookstore_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "the_loai")
@Data
public class TheLoai {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long maTheLoai;
    private String tenTheLoai;
    private List<Sach> danhSachQuyenSach;
    private List<HinhAnh> danhSachHinhAnh;

}
