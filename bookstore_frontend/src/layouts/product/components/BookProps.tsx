import React from 'react'
import type BookModel from '../../../models/BookModel'

interface BookProps {
  book: BookModel;
}

export const BookProps: React.FC<BookProps> = (props) => {
  return (
    <div className='card'>
      <img
        src={""}
        className='card-img-top'
        alt={props.book.tenSach}
        style={{ height: '200px' }}
      />
      <div className='card-body'>
        <h5 className='card-title'>{props.book.tenSach}</h5>
        <p className='card-text'>{props.book.moTa}</p>
        <div className='price'>
          <span className='original-price'>
            <del>{props.book.giaNiemYet}</del>
          </span>
          <span className='discounted-price'>
            <strong>{props.book.giaBan}</strong>
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
  )
}

