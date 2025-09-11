import React, { useEffect, useState } from 'react'
import type BookModel from '../../../models/BookModel';
import { getNewBook } from '../../../api/BookAPI';
import { CarouselItem } from './CarouselItem';

export const Carousel: React.FC = () => {

  const [ListBook, setListBook] = useState<BookModel[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getNewBook().then(
      (bookData) => {
        setListBook(bookData.data);
        setLoadingData(false);
      }
    ).catch(
      error => {
        setLoadingData(false);
        setError(error.message || 'Lỗi khi tải dữ liệu sách');
      }
    );
  }, [])

  if (loadingData) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error}</h1>
      </div>
    )
  }

  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          {ListBook.map((book, idx) => (
            <div
              className={`carousel-item${idx === 0 ? ' active' : ''}`}
              data-bs-interval="10000"
              key={book.maSach}
            >
              <CarouselItem book={book} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
