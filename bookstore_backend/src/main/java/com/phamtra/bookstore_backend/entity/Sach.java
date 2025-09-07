package com.phamtra.bookstore_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "sach")
@Data
public class Sach {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long maSach;
    private String tenSach;
    private String tenTacGia;
    private String ISBN;
    private String moTa;
    private double giaNiemYet;
    private double giaBan;
    private int soLuong;
    private double trungBinhXepHang;
    List<TheLoai> danhSachTheLoai;
    List<HinhAnh> danhSachHinhAnh;
    List<SuDanhGia> danhSachSuDanhGia;
    List<ChiTietDonHang> danhSachChiTietDonHang;
    List<SachYeuThich> danhSachSachYeuThich;




}
