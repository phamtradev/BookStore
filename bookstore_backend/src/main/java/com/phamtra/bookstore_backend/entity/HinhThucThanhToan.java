package com.phamtra.bookstore_backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "hinh_thuc_thanh_toan")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HinhThucThanhToan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_hinh_thuc_thanh_toan")
    private long maHinhThucThanhToan;

    @Column(name = "ten_hinh_thuc_thanh_toan")
    private String tenHinhThucThanhToan;

    @Column(name = "mo_ta")
    private String moTa;

    @Column(name = "chi_phi_thanh_toan")
    private double chiPhiThanhToan;

    @OneToMany(mappedBy = "hinhThucThanhToan", fetch = FetchType.LAZY)
    private List<DonHang> danhSachDonHang;

}
