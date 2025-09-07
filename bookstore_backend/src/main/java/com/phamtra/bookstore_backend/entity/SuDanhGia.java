package com.phamtra.bookstore_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "su_danh_gia")
@Data
public class SuDanhGia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long maDanhGia;
    private double diemXepHang;
    private String nhanXet;
    private Sach sach;
    private NguoiDung nguoiDung;
}
