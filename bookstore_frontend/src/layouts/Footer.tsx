import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">
          {/* Cột 1 */}
          <div className="col-md-4 mb-3">
            <h5>📚 BookStore</h5>
            <p>
              Nơi chia sẻ và mua bán sách trực tuyến, giúp bạn tìm được tài liệu và kiến thức hữu ích nhanh chóng.
            </p>
          </div>

          {/* Cột 2 */}
          <div className="col-md-4 mb-3">
            <h5>Liên kết nhanh</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Trang chủ</a></li>
              <li><a href="#" className="text-light text-decoration-none">Sách mới</a></li>
              <li><a href="#" className="text-light text-decoration-none">Liên hệ</a></li>
              <li><a href="#" className="text-light text-decoration-none">Về chúng tôi</a></li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div className="col-md-4 mb-3">
            <h5>Liên hệ</h5>
            <p><i className="fa-solid fa-location-dot me-2"></i>123 Đường ABC, TP.HCM</p>
            <p><i className="fa-solid fa-envelope me-2"></i>support@bookstore.com</p>
            <p><i className="fa-solid fa-phone me-2"></i>+84 123 456 789</p>
            <div>
              <a href="#" className="text-light me-3"><i className="fa-brands fa-facebook fa-lg"></i></a>
              <a href="#" className="text-light me-3"><i className="fa-brands fa-instagram fa-lg"></i></a>
              <a href="#" className="text-light"><i className="fa-brands fa-github fa-lg"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center">
          <small>© 2025 BookStore. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

