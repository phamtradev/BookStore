import React from 'react';
import type BookModel from '../../../models/BookModel';

interface CarouselItemProps {
  book: BookModel;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ book }) => {
  const photo = book.hinhAnhs && book.hinhAnhs.length > 0 ? book.hinhAnhs[0] : null;

  return (
    <div className='row align-items-center'>
      <div className='col-5 text-center'>
        <img src={photo?.duLieuAnh} style={{ width: '150px' }} className='float-end' alt={book.tenSach} />
      </div>
      <div className='col-7'>
        <h5>{book.tenSach}</h5>
        <p>{book.moTa}</p>
      </div>
    </div>
  );
}

