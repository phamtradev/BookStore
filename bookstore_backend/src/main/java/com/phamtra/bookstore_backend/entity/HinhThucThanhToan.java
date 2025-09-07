package com.phamtra.bookstore_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "hinh_thuc_thanh_toan")
@Data
public class HinhThucThanhToan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long maHinhThucThanhToan;
    private String tenHinhThucThanhToan;
    private String moTa;
    private double chiPhiThanhToan;
    private List<DonHang> danhSachDonHang;

}
