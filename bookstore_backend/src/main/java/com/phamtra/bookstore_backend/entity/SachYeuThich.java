package com.phamtra.bookstore_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "sach_yeu_thich")
@Data
public class SachYeuThich {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long maSachYeuThich;
    private NguoiDung nguoiDung;
    private Sach sach;
}
