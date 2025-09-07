package com.phamtra.bookstore_backend.entity;

import com.phamtra.bookstore_backend.util.constant.GioiTinh;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "nguoi_dung")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NguoiDung {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_nguoi_dung")
    private long maNguoiDung;

    @Column(name = "ho_dem", length = 255)
    private String hoDem;

    @Column(name = "ten", length = 255)
    private String ten;

    @Column(name = "ten_dang_nhap", length = 255)
    private String tenDangNhap;

    @Column(name = "mat_khau", length = 512)
    private String matKhau;

    @Column(name = "gioi_tinh")
    private GioiTinh gioiTinh;

    @Column(name = "email")
    private String email;

    @Column(name = "so_dien_thoai")
    private String soDienThoai;

    @Column(name = "dia_chi_mua_hang")
    private String diaChiMuaHang;

    @Column(name = "dia_chi_giao_hang")
    private String diaChiGiaoHang;

    @OneToMany(mappedBy = "nguoiDung", fetch = FetchType.LAZY)
    private List<SuDanhGia> danhSachSuDanhGia;

    @OneToMany(mappedBy = "nguoiDung", fetch = FetchType.LAZY)
    private List<SachYeuThich> danhSachSachYeuThich;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "nguoidung_quyen",
            joinColumns = @JoinColumn(name = "ma_nguoi_dung"),
            inverseJoinColumns = @JoinColumn(name = "ma_quyen"))
    private List<Quyen> danhSachQuyen;

    @OneToMany(mappedBy = "nguoiDung", fetch = FetchType.LAZY)
    private List<DonHang> danhSachDonHang;




}
