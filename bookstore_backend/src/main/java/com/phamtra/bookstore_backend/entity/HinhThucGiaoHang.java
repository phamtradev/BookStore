package com.phamtra.bookstore_backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "hinh_thuc_giao_hang")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HinhThucGiaoHang {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_hinh_thuc_giao_hang")
    private long maHinhThucGiaoHang;

    @Column(name = "ten_hinh_thuc_giao_hang")
    private String tenHinhThucGiaoHang;

    @Column(name = "mo_ta")
    private String moTa;

    @Column(name = "chi_phi_giao_hang")
    private double chiPhiGiaoHang;

    @OneToMany(mappedBy = "hinhThucGiaoHang", fetch = FetchType.LAZY)
    private List<DonHang> danhSachDonHang;

}
