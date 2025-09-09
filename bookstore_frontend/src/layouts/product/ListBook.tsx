import React from 'react'
import type { Book } from '../../models/Book'
import { BookProps } from './components/BookProps'

export const ListBook: React.FC = () => {
  const books: Book[] = [
    {
      id: 1,
      title: 'Book 1',
      description: "abcdefc",
      originalPrice: 50000,
      price: 20000,
      imageUrl: '/books/Sach1.webp',
    },
    {
      id: 2,
      title: 'Book 2',
      description: "abcdefcdasdsda",
      originalPrice: 100000,
      price: 10000,
      imageUrl: '/books/Sach2.webp',
    },
    {
      id: 3,
      title: 'Book 3',
      description: "sadasabcdefcdasdsda",
      originalPrice: 200000,
      price: 100000,
      imageUrl: '/books/Sach3.webp',
    },
    {
      id: 1,
      title: 'Book 1',
      description: "abcdefc",
      originalPrice: 50000,
      price: 20000,
      imageUrl: '/books/Sach1.webp',
    },
    {
      id: 2,
      title: 'Book 2',
      description: "abcdefcdasdsda",
      originalPrice: 100000,
      price: 10000,
      imageUrl: '/books/Sach2.webp',
    },
    {
      id: 3,
      title: 'Book 3',
      description: "sadasabcdefcdasdsda",
      originalPrice: 200000,
      price: 100000,
      imageUrl: '/books/Sach3.webp',
    },
    {
      id: 1,
      title: 'Book 1',
      description: "abcdefc",
      originalPrice: 50000,
      price: 20000,
      imageUrl: '/books/Sach1.webp',
    },
    {
      id: 2,
      title: 'Book 2',
      description: "abcdefcdasdsda",
      originalPrice: 100000,
      price: 10000,
      imageUrl: '/books/Sach2.webp',
    },
    {
      id: 3,
      title: 'Book 3',
      description: "sadasabcdefcdasdsda",
      originalPrice: 200000,
      price: 100000,
      imageUrl: '/books/Sach3.webp',
    },
  ]
  return (
    <div className="container">
      <div className="row mt-4">
        {books.map((book, index) => (
          <div className="col-3 mb-4" key={index}>
            <BookProps book={book} />
          </div>
        ))}
      </div>
    </div>

  )
}
