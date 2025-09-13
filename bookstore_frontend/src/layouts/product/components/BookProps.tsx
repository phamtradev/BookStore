import React, { useEffect, useState } from 'react'
import type BookModel from '../../../models/BookModel'


interface BookProps {
  book: BookModel;
}

export const BookProps: React.FC<BookProps> = (props) => {
  // Debug
  console.log('BookProps received book:', props.book);

  // Kiểm tra nếu props.book là undefined
  if (!props.book) {
    console.error('Book prop is undefined');
    return <div className="card">Không có dữ liệu sách</div>;
  }

  // Hiển thị ảnh từ hinhAnhs nếu có
  const photo = props.book.hinhAnhs && props.book.hinhAnhs.length > 0 ? props.book.hinhAnhs[0] : null;

  // Debug
  console.log('Photo object:', photo);

  // Sử dụng ảnh mẫu nếu không có ảnh
  const placeholderImg = '/src/books/Sach1.webp';

  return (
    <div className='card'>
      {photo && (photo.duLieuAnh || photo.duongDan) ? (
        <img
          src={photo.duLieuAnh || photo.duongDan}
          className='card-img-top'
          alt={props.book.tenSach}
          style={{ height: '200px', objectFit: 'cover' }}
          onError={(e) => {
            console.log('Image error, using placeholder');
            (e.target as HTMLImageElement).src = placeholderImg;
          }}
        />
      ) : (
        <img
          src={placeholderImg}
          className='card-img-top'
          alt="Placeholder"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      )}
      <div className='card-body'>
        <h5 className='card-title'>{props.book.tenSach}</h5>
        <p className='card-text'>{props.book.moTa}</p>
        <div className='price'>
          <span className='original-price'>
            <del>{props.book.giaNiemYet?.toLocaleString('vi-VN')} đ</del>
          </span>
          <span className='discounted-price ms-2'>
            <strong>{props.book.giaBan?.toLocaleString('vi-VN')} đ</strong>
          </span>
        </div>
        <div className='row mt-2' role='group'>
          <div className='col-6'>
            <a href="#" className='btn btn-secondary btn-block'>
              <i className='fas fa-heart'></i>
            </a>
          </div>
          <div className='col-6'>
            <button className='btn btn-danger btn-block'>
              <i className='fas fa-shopping-cart'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

