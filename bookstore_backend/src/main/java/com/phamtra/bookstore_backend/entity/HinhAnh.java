package com.phamtra.bookstore_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "hinh_anh")
@Data
public class HinhAnh {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long maHinhAnh;
    private String tenHinhAnh;
    private boolean laIcon;
    private String duongDan;
    private String duLieuAnh;
    private Sach sach;

}
