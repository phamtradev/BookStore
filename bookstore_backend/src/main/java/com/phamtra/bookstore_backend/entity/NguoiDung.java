package com.phamtra.bookstore_backend.entity;

import com.phamtra.bookstore_backend.util.constant.GioiTinh;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "nguoi_dung")
@Data
public class NguoiDung {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long maNguoiDung;
    private String hoDem;
    private String ten;
    private String tenDangNhap;
    private String matKhau;
    private GioiTinh gioiTinh;
    private String email;
    private String soDienThoai;
    private String diaChiMuaHang;
    private String diaChiGiaoHang;
    private List<SuDanhGia> danhSachSuDanhGia;
    private List<SachYeuThich> danhSachSachYeuThich;
    private List<Quyen> danhSachQuyen;
    private List<DonHang> danhSachDonHang;




}
