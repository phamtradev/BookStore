package com.phamtra.bookstore_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "chi_tiet_don_hang")
@Data
public class ChiTietDonHang {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long maChiTietDonHang;
    private int soLuong;
    private double giaBan;
    private Sach sach;
    private DonHang donHang;


}
