package com.phamtra.bookstore_backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "su_danh_gia")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SuDanhGia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_danh_gia")
    private long maDanhGia;

    @Column(name = "diem_xep_hang")
    private double diemXepHang;

    @Column(name = "nhan_xet")
    private String nhanXet;

    @ManyToOne
    @JoinColumn(name = "ma_sach", nullable = false)
    private Sach sach;

    @ManyToOne
    @JoinColumn(name = "ma_nguoi_dung", nullable = false)
    private NguoiDung nguoiDung;
}
