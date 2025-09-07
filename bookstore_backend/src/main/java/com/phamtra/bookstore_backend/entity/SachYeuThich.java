package com.phamtra.bookstore_backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "sach_yeu_thich")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SachYeuThich {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_sach_yeu_thich")
    private long maSachYeuThich;

    @ManyToOne
    @JoinColumn(name = "ma_nguoi_dung", nullable = false)
    private NguoiDung nguoiDung;

    @ManyToOne
    @JoinColumn(name = "ma_sach", nullable = false)
    private Sach sach;
}
