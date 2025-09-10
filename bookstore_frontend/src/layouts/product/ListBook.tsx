import React, { useEffect, useState } from 'react'
import type BookModel from '../../models/BookModel';
import { BookProps } from './components/BookProps';
import { getAllBook } from '../../api/BookAPI';
import my_request from '../../api/Request';
export const ListBook: React.FC = () => {

  const [ListBook, setListBook] = useState<BookModel[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllBook().then(
      bookData => {
        setListBook(bookData);
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


    <div className="container">
      <div className="row mt-4">
        {ListBook.map((book, index) => (
          <div className="col-3 mb-4" key={index}>
            <BookProps key={book.maSach} book={book} />
          </div>
        ))}
      </div>
    </div>

  )
}
