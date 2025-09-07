package com.phamtra.bookstore_backend.service;

import com.phamtra.bookstore_backend.entity.NguoiDung;
import com.phamtra.bookstore_backend.repository.NguoiDungRepository;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NguoiDungService {

    private final NguoiDungRepository nguoiDungRepository;

    public NguoiDungService(NguoiDungRepository nguoiDungRepository) {
        this.nguoiDungRepository = nguoiDungRepository;
    }

    public NguoiDung taoNguoiDung(NguoiDung nguoiDung) {
        return this.nguoiDungRepository.save(nguoiDung);
    }

    public void xoaNguoiDung(long id) {
        this.nguoiDungRepository.deleteById(id);
    }

    public NguoiDung getNguoiDungById(long id) {
        Optional<NguoiDung> nguoiDungOption = this.nguoiDungRepository.findById(id);
        if (nguoiDungOption.isPresent()) {
            return nguoiDungOption.get();
        }
        return null;
    }

    public List<NguoiDung> getAllNguoiDung() {
        return this.nguoiDungRepository.findAll();
    }

    public NguoiDung capNhatNguoiDung(NguoiDung nguoiDung) {
        NguoiDung nguoiDungHienTai = this.getNguoiDungById(nguoiDung.getMaNguoiDung());
        if (nguoiDungHienTai != null) {
            nguoiDungHienTai.setTen(nguoiDung.getTen());
            nguoiDungHienTai.setHoDem(nguoiDung.getHoDem());
            nguoiDungHienTai.setDiaChiGiaoHang(nguoiDung.getDiaChiGiaoHang());
            nguoiDungHienTai.setDiaChiMuaHang(nguoiDung.getDiaChiMuaHang());
            nguoiDungHienTai.setEmail(nguoiDung.getEmail());
            nguoiDungHienTai.setGioiTinh(nguoiDung.getGioiTinh());
            nguoiDungHienTai.setMatKhau(nguoiDung.getMatKhau());
            nguoiDungHienTai.setTenDangNhap(nguoiDung.getTenDangNhap());
            nguoiDungHienTai.setSoDienThoai(nguoiDung.getSoDienThoai());
            nguoiDungHienTai = this.nguoiDungRepository.save(nguoiDungHienTai);
        }
        return nguoiDungHienTai;
    }
}
