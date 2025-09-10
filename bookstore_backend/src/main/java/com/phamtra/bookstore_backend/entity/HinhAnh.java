package com.phamtra.bookstore_backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "hinh_anh")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HinhAnh {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_hinh_anh")
    private long maHinhAnh;

    @Column(name = "ten_hinh_anh", length = 256)
    private String tenHinhAnh;

    @Column(name = "la_icon")
    private boolean laIcon;

    @Column(name = "duong_dan")
    private String duongDan;

    @Column(name = "du_lieu_anh")
    @Lob
    private String duLieuAnh;

    @ManyToOne
    @JoinColumn(name = "ma_sach", nullable = false)
    @JsonIgnore
    private Sach sach;

}


