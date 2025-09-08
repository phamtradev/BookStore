import React from 'react'

export const Banner = () => {
  return (
    <div className='p-5 mb-2 bg-dark'>
      <div className='container-fluid py-5 text-white d-flex justify-content-center align-items-center'>
        <div>
          <h2 className='display-5\ fw-bold'>
            Đọc sách chính là hộ chiếu <br /> cho vô số cuộc phiêu lưu
          </h2>
          <p className=''>PhamTra</p>
          <button className='btn btn-primary btn-md text-white float-end'>Khám phá sách tại phamtra.com</button>
        </div>
      </div>
    </div>
  )
}
