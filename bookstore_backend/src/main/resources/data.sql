-- Idempotent seed data for SQL Server

-- Categories (the_loai)
IF
NOT EXISTS (SELECT 1 FROM dbo.the_loai WHERE ma_the_loai = 1)
BEGIN
  SET
IDENTITY_INSERT dbo.the_loai ON
  INSERT INTO dbo.the_loai (ma_the_loai, ten_the_loai) VALUES (1, N'Fiction')
  SET IDENTITY_INSERT dbo.the_loai OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.the_loai WHERE ma_the_loai = 2)
BEGIN
  SET
IDENTITY_INSERT dbo.the_loai ON
  INSERT INTO dbo.the_loai (ma_the_loai, ten_the_loai) VALUES (2, N'Technology')
  SET IDENTITY_INSERT dbo.the_loai OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.the_loai WHERE ma_the_loai = 3)
BEGIN
  SET
IDENTITY_INSERT dbo.the_loai ON
  INSERT INTO dbo.the_loai (ma_the_loai, ten_the_loai) VALUES (3, N'Children')
  SET IDENTITY_INSERT dbo.the_loai OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.the_loai WHERE ma_the_loai = 4)
BEGIN
  SET
IDENTITY_INSERT dbo.the_loai ON
  INSERT INTO dbo.the_loai (ma_the_loai, ten_the_loai) VALUES (4, N'Business')
  SET IDENTITY_INSERT dbo.the_loai OFF
END;

-- Roles (quyen)
IF
NOT EXISTS (SELECT 1 FROM dbo.quyen WHERE ma_quyen = 1)
BEGIN
  SET
IDENTITY_INSERT dbo.quyen ON
  INSERT INTO dbo.quyen (ma_quyen, ten_quyen) VALUES (1, N'USER')
  SET IDENTITY_INSERT dbo.quyen OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.quyen WHERE ma_quyen = 2)
BEGIN
  SET
IDENTITY_INSERT dbo.quyen ON
  INSERT INTO dbo.quyen (ma_quyen, ten_quyen) VALUES (2, N'ADMIN')
  SET IDENTITY_INSERT dbo.quyen OFF
END;

-- Payment methods (hinh_thuc_thanh_toan)
IF
NOT EXISTS (SELECT 1 FROM dbo.hinh_thuc_thanh_toan WHERE ma_hinh_thuc_thanh_toan = 1)
BEGIN
  SET
IDENTITY_INSERT dbo.hinh_thuc_thanh_toan ON
  INSERT INTO dbo.hinh_thuc_thanh_toan (ma_hinh_thuc_thanh_toan, ten_hinh_thuc_thanh_toan, mo_ta, chi_phi_thanh_toan)
  VALUES (1, N'Thanh toán khi nhận hàng (COD)', N'Thanh toán tiền mặt', 5000)
  SET IDENTITY_INSERT dbo.hinh_thuc_thanh_toan OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.hinh_thuc_thanh_toan WHERE ma_hinh_thuc_thanh_toan = 2)
BEGIN
  SET
IDENTITY_INSERT dbo.hinh_thuc_thanh_toan ON
  INSERT INTO dbo.hinh_thuc_thanh_toan (ma_hinh_thuc_thanh_toan, ten_hinh_thuc_thanh_toan, mo_ta, chi_phi_thanh_toan)
  VALUES (2, N'Thanh toán online', N'Ví/Momo/ZaloPay', 3000)
  SET IDENTITY_INSERT dbo.hinh_thuc_thanh_toan OFF
END;

-- Shipping methods (hinh_thuc_giao_hang)
IF
NOT EXISTS (SELECT 1 FROM dbo.hinh_thuc_giao_hang WHERE ma_hinh_thuc_giao_hang = 1)
BEGIN
  SET
IDENTITY_INSERT dbo.hinh_thuc_giao_hang ON
  INSERT INTO dbo.hinh_thuc_giao_hang (ma_hinh_thuc_giao_hang, ten_hinh_thuc_giao_hang, mo_ta, chi_phi_giao_hang)
  VALUES (1, N'Giao thường', N'3-5 ngày', 15000)
  SET IDENTITY_INSERT dbo.hinh_thuc_giao_hang OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.hinh_thuc_giao_hang WHERE ma_hinh_thuc_giao_hang = 2)
BEGIN
  SET
IDENTITY_INSERT dbo.hinh_thuc_giao_hang ON
  INSERT INTO dbo.hinh_thuc_giao_hang (ma_hinh_thuc_giao_hang, ten_hinh_thuc_giao_hang, mo_ta, chi_phi_giao_hang)
  VALUES (2, N'Giao nhanh', N'1-2 ngày', 30000)
  SET IDENTITY_INSERT dbo.hinh_thuc_giao_hang OFF
END;

-- Books (sach)
IF
NOT EXISTS (SELECT 1 FROM dbo.sach WHERE ma_sach = 1)
BEGIN
  SET
IDENTITY_INSERT dbo.sach ON
  INSERT INTO dbo.sach (ma_sach, ten_sach, ten_tac_gia, isbn, mo_ta, gia_niem_yet, gia_ban, so_luong, trung_binh_xep_hang)
  VALUES (1, N'Spring Boot in Action', N'Craig Walls', N'9781617292545', N'Sách về Spring Boot', 450000, 390000, 50, 4.6)
  SET IDENTITY_INSERT dbo.sach OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.sach WHERE ma_sach = 2)
BEGIN
  SET
IDENTITY_INSERT dbo.sach ON
  INSERT INTO dbo.sach (ma_sach, ten_sach, ten_tac_gia, isbn, mo_ta, gia_niem_yet, gia_ban, so_luong, trung_binh_xep_hang)
  VALUES (2, N'Clean Code', N'Robert C. Martin', N'9780132350884', N'Viết mã sạch', 520000, 480000, 30, 4.8)
  SET IDENTITY_INSERT dbo.sach OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.sach WHERE ma_sach = 3)
BEGIN
  SET
IDENTITY_INSERT dbo.sach ON
  INSERT INTO dbo.sach (ma_sach, ten_sach, ten_tac_gia, isbn, mo_ta, gia_niem_yet, gia_ban, so_luong, trung_binh_xep_hang)
  VALUES (3, N'Truyện thiếu nhi', N'Nhiều tác giả', N'9786041234567', N'Cho trẻ em', 120000, 95000, 100, 4.4)
  SET IDENTITY_INSERT dbo.sach OFF
END;

-- Users (nguoi_dung) - GioiTinh: 0 = NAM, 1 = NU
IF
NOT EXISTS (SELECT 1 FROM dbo.nguoi_dung WHERE ma_nguoi_dung = 1)
BEGIN
  SET
IDENTITY_INSERT dbo.nguoi_dung ON
  INSERT INTO dbo.nguoi_dung (ma_nguoi_dung, ho_dem, ten, ten_dang_nhap, mat_khau, gioi_tinh, email, so_dien_thoai, dia_chi_mua_hang, dia_chi_giao_hang)
  VALUES (1, N'Nguyễn', N'An', N'nguyena', N'123456', 0, N'an.nguyen@example.com', N'0900000001', N'123 Lê Lợi, Q1', N'123 Lê Lợi, Q1')
  SET IDENTITY_INSERT dbo.nguoi_dung OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.nguoi_dung WHERE ma_nguoi_dung = 2)
BEGIN
  SET
IDENTITY_INSERT dbo.nguoi_dung ON
  INSERT INTO dbo.nguoi_dung (ma_nguoi_dung, ho_dem, ten, ten_dang_nhap, mat_khau, gioi_tinh, email, so_dien_thoai, dia_chi_mua_hang, dia_chi_giao_hang)
  VALUES (2, N'Trần', N'Bình', N'tranbinh', N'123456', 1, N'binh.tran@example.com', N'0900000002', N'456 Hai Bà Trưng, Q3', N'456 Hai Bà Trưng, Q3')
  SET IDENTITY_INSERT dbo.nguoi_dung OFF
END;

-- Book-Category links
IF
NOT EXISTS (SELECT 1 FROM dbo.sach_theloai WHERE ma_sach = 1 AND ma_the_loai = 2)
  INSERT INTO dbo.sach_theloai (ma_sach, ma_the_loai) VALUES (1, 2);
IF
NOT EXISTS (SELECT 1 FROM dbo.sach_theloai WHERE ma_sach = 2 AND ma_the_loai = 4)
  INSERT INTO dbo.sach_theloai (ma_sach, ma_the_loai) VALUES (2, 4);
IF
NOT EXISTS (SELECT 1 FROM dbo.sach_theloai WHERE ma_sach = 3 AND ma_the_loai = 3)
  INSERT INTO dbo.sach_theloai (ma_sach, ma_the_loai) VALUES (3, 3);

-- User-Role links
IF
NOT EXISTS (SELECT 1 FROM dbo.nguoidung_quyen WHERE ma_nguoi_dung = 1 AND ma_quyen = 1)
  INSERT INTO dbo.nguoidung_quyen (ma_nguoi_dung, ma_quyen) VALUES (1, 1);
IF
NOT EXISTS (SELECT 1 FROM dbo.nguoidung_quyen WHERE ma_nguoi_dung = 2 AND ma_quyen = 1)
  INSERT INTO dbo.nguoidung_quyen (ma_nguoi_dung, ma_quyen) VALUES (2, 1);
IF
NOT EXISTS (SELECT 1 FROM dbo.nguoidung_quyen WHERE ma_nguoi_dung = 2 AND ma_quyen = 2)
  INSERT INTO dbo.nguoidung_quyen (ma_nguoi_dung, ma_quyen) VALUES (2, 2);

-- Images (hinh_anh)
IF
NOT EXISTS (SELECT 1 FROM dbo.hinh_anh WHERE ma_hinh_anh = 1)
BEGIN
  SET
IDENTITY_INSERT dbo.hinh_anh ON
  INSERT INTO dbo.hinh_anh (ma_hinh_anh, ten_hinh_anh, la_icon, duong_dan, du_lieu_anh, ma_sach)
  VALUES (1, N'spring-boot-cover.jpg', 0, N'/images/spring-boot.jpg', NULL, 1)
  SET IDENTITY_INSERT dbo.hinh_anh OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.hinh_anh WHERE ma_hinh_anh = 2)
BEGIN
  SET
IDENTITY_INSERT dbo.hinh_anh ON
  INSERT INTO dbo.hinh_anh (ma_hinh_anh, ten_hinh_anh, la_icon, duong_dan, du_lieu_anh, ma_sach)
  VALUES (2, N'clean-code-cover.jpg', 0, N'/images/clean-code.jpg', NULL, 2)
  SET IDENTITY_INSERT dbo.hinh_anh OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.hinh_anh WHERE ma_hinh_anh = 3)
BEGIN
  SET
IDENTITY_INSERT dbo.hinh_anh ON
  INSERT INTO dbo.hinh_anh (ma_hinh_anh, ten_hinh_anh, la_icon, duong_dan, du_lieu_anh, ma_sach)
  VALUES (3, N'thieu-nhi-cover.jpg', 0, N'/images/thieu-nhi.jpg', NULL, 3)
  SET IDENTITY_INSERT dbo.hinh_anh OFF
END;

-- Reviews (su_danh_gia)
IF
NOT EXISTS (SELECT 1 FROM dbo.su_danh_gia WHERE ma_danh_gia = 1)
BEGIN
  SET
IDENTITY_INSERT dbo.su_danh_gia ON
  INSERT INTO dbo.su_danh_gia (ma_danh_gia, diem_xep_hang, nhan_xet, ma_sach, ma_nguoi_dung)
  VALUES (1, 5.0, N'Rất hay', 1, 1)
  SET IDENTITY_INSERT dbo.su_danh_gia OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.su_danh_gia WHERE ma_danh_gia = 2)
BEGIN
  SET
IDENTITY_INSERT dbo.su_danh_gia ON
  INSERT INTO dbo.su_danh_gia (ma_danh_gia, diem_xep_hang, nhan_xet, ma_sach, ma_nguoi_dung)
  VALUES (2, 4.5, N'Hữu ích', 2, 1)
  SET IDENTITY_INSERT dbo.su_danh_gia OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.su_danh_gia WHERE ma_danh_gia = 3)
BEGIN
  SET
IDENTITY_INSERT dbo.su_danh_gia ON
  INSERT INTO dbo.su_danh_gia (ma_danh_gia, diem_xep_hang, nhan_xet, ma_sach, ma_nguoi_dung)
  VALUES (3, 4.0, N'Ổn', 3, 2)
  SET IDENTITY_INSERT dbo.su_danh_gia OFF
END;

-- Orders (don_hang)
IF
NOT EXISTS (SELECT 1 FROM dbo.don_hang WHERE ma_don_hang = 1)
BEGIN
  SET
IDENTITY_INSERT dbo.don_hang ON
  INSERT INTO dbo.don_hang (ma_don_hang, ngay_tao, dia_chi_mua_hang, dia_chi_nhan_hang, tong_tien_san_pham, chi_phi_giao_hang, chi_phi_thanh_toan, tong_tien, ma_nguoi_dung, ma_hinh_thuc_thanh_toan, ma_hinh_thuc_giao_hang)
  VALUES (1, '2025-09-01 10:00:00', N'123 Lê Lợi, Q1', N'123 Lê Lợi, Q1', 870000, 15000, 5000, 890000, 1, 1, 1)
  SET IDENTITY_INSERT dbo.don_hang OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.don_hang WHERE ma_don_hang = 2)
BEGIN
  SET
IDENTITY_INSERT dbo.don_hang ON
  INSERT INTO dbo.don_hang (ma_don_hang, ngay_tao, dia_chi_mua_hang, dia_chi_nhan_hang, tong_tien_san_pham, chi_phi_giao_hang, chi_phi_thanh_toan, tong_tien, ma_nguoi_dung, ma_hinh_thuc_thanh_toan, ma_hinh_thuc_giao_hang)
  VALUES (2, '2025-09-02 11:30:00', N'456 Hai Bà Trưng, Q3', N'456 Hai Bà Trưng, Q3', 480000, 30000, 3000, 513000, 2, 2, 2)
  SET IDENTITY_INSERT dbo.don_hang OFF
END;

-- Order items (chi_tiet_don_hang)
IF
NOT EXISTS (SELECT 1 FROM dbo.chi_tiet_don_hang WHERE ma_chi_tiet_don_hang = 1)
BEGIN
  SET
IDENTITY_INSERT dbo.chi_tiet_don_hang ON
  INSERT INTO dbo.chi_tiet_don_hang (ma_chi_tiet_don_hang, so_luong, gia_ban, ma_sach, ma_don_hang)
  VALUES (1, 1, 390000, 1, 1)
  SET IDENTITY_INSERT dbo.chi_tiet_don_hang OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.chi_tiet_don_hang WHERE ma_chi_tiet_don_hang = 2)
BEGIN
  SET
IDENTITY_INSERT dbo.chi_tiet_don_hang ON
  INSERT INTO dbo.chi_tiet_don_hang (ma_chi_tiet_don_hang, so_luong, gia_ban, ma_sach, ma_don_hang)
  VALUES (2, 1, 480000, 2, 1)
  SET IDENTITY_INSERT dbo.chi_tiet_don_hang OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.chi_tiet_don_hang WHERE ma_chi_tiet_don_hang = 3)
BEGIN
  SET
IDENTITY_INSERT dbo.chi_tiet_don_hang ON
  INSERT INTO dbo.chi_tiet_don_hang (ma_chi_tiet_don_hang, so_luong, gia_ban, ma_sach, ma_don_hang)
  VALUES (3, 1, 480000, 2, 2)
  SET IDENTITY_INSERT dbo.chi_tiet_don_hang OFF
END;

-- Favorites (sach_yeu_thich)
IF
NOT EXISTS (SELECT 1 FROM dbo.sach_yeu_thich WHERE ma_sach_yeu_thich = 1)
BEGIN
  SET
IDENTITY_INSERT dbo.sach_yeu_thich ON
  INSERT INTO dbo.sach_yeu_thich (ma_sach_yeu_thich, ma_nguoi_dung, ma_sach) VALUES (1, 1, 2)
  SET IDENTITY_INSERT dbo.sach_yeu_thich OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.sach_yeu_thich WHERE ma_sach_yeu_thich = 2)
BEGIN
  SET
IDENTITY_INSERT dbo.sach_yeu_thich ON
  INSERT INTO dbo.sach_yeu_thich (ma_sach_yeu_thich, ma_nguoi_dung, ma_sach) VALUES (2, 2, 1)
  SET IDENTITY_INSERT dbo.sach_yeu_thich OFF
END;
IF
NOT EXISTS (SELECT 1 FROM dbo.sach_yeu_thich WHERE ma_sach_yeu_thich = 3)
BEGIN
  SET
IDENTITY_INSERT dbo.sach_yeu_thich ON
  INSERT INTO dbo.sach_yeu_thich (ma_sach_yeu_thich, ma_nguoi_dung, ma_sach) VALUES (3, 2, 3)
  SET IDENTITY_INSERT dbo.sach_yeu_thich OFF
END;
