import React, { useEffect, useState } from 'react'
import type BookModel from '../../models/BookModel';
import { BookProps } from './components/BookProps';
import { getBook } from '../../api/BookAPI';
import { Pagination } from '../utils/Pagination';
export const ListBook: React.FC = () => {

  const [ListBook, setListBook] = useState<BookModel[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    const fetchBooks = async () => {
      setLoadingData(true);
      try {
        const endpoints = `http://localhost:8080/api/v1/sachs?sort=maSach,desc&current=${currentPage}&pageSize=${pageSize}`;
        const bookData = await getBook(endpoints);
        setListBook(bookData.data || []);
        // Nếu API không trả về totalPage, tự tính dựa vào totalItem
        if (bookData.totalPage) {
          setTotalPages(bookData.totalPage);
        } else if (bookData.totalItem) {
          setTotalPages(Math.ceil(bookData.totalItem / pageSize));
        } else {
          setTotalPages(1);
        }
      } catch (error: any) {
        setError(error.message || 'Lỗi khi tải dữ liệu sách');
      }
      setLoadingData(false);
    };
    fetchBooks();
  }, [currentPage]);

  const handlePaginate = (page: number) => {
    setCurrentPage(page);
  };
  const booksToShow = ListBook;

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
      <div className="row mt-4 mb-4">
        {booksToShow.map((book) => (
          <div className="col-3 mb-4" key={book.maSach}>
            <BookProps book={book} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <Pagination currentPage={currentPage} totalPages={totalPages} paginate={handlePaginate} />
      </div>
    </div>
  )
}
