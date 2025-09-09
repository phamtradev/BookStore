package com.phamtra.bookstore_backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "sach")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Sach {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_sach")
    private long maSach;

    @Column(name = "ten_sach", length = 512)
    private String tenSach;

    @Column(name = "ten_tac_gia", length = 512)
    private String tenTacGia;

    @Column(name = "isbn", length = 256)
    private String ISBN;

    @Column(name = "mo_ta", columnDefinition = "text")
    private String moTa;

    @Column(name = "gia_niem_yet")
    private double giaNiemYet;

    @Column(name = "gia_ban")
    private double giaBan;

    @Column(name = "so_luong")
    private int soLuong;

    @Column(name = "trung_binh_xep_hang")
    private double trungBinhXepHang;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "sach_theloai",
            joinColumns = @JoinColumn(name = "ma_sach"),
            inverseJoinColumns = @JoinColumn(name = "ma_the_loai"))
    @JsonIgnore
    List<TheLoai> danhSachTheLoai;

    @OneToMany(mappedBy = "sach", fetch = FetchType.LAZY)
    @JsonIgnore
    List<HinhAnh> danhSachHinhAnh;

    @OneToMany(mappedBy = "sach", fetch = FetchType.LAZY)
    @JsonIgnore
    List<SuDanhGia> danhSachSuDanhGia;

    @OneToMany(mappedBy = "sach", fetch = FetchType.LAZY)
    @JsonIgnore
    List<ChiTietDonHang> danhSachChiTietDonHang;

    @OneToMany(mappedBy = "sach", fetch = FetchType.LAZY)
    @JsonIgnore
    List<SachYeuThich> danhSachSachYeuThich;


}

