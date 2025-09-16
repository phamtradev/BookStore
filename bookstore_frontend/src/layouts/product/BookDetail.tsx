import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BookModel from '../../models/BookModel';
import './BookDetail.css';
import { getBookById as fetchBookById } from '../../api/BookAPI';

export const BookDetail = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [book, setBook] = useState<BookModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalOriginalPrice, setTotalOriginalPrice] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>('moTa');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const placeholderImg = '/src/books/Sach1.webp';

  // useEffect cho việc tải chi tiết sách khi ID thay đổi
  useEffect(() => {
    console.log("BookDetail - bookId từ params:", bookId);
    loadBookDetails();

    // Reset state khi thay đổi sách
    setQuantity(1);
    setActiveTab('moTa');
    setSelectedImage(null);
  }, [bookId]);

  // useEffect để cập nhật tổng giá khi số lượng thay đổi
  useEffect(() => {
    if (book && book.giaBan) {
      setTotalPrice(book.giaBan * quantity);
    }
    if (book && book.giaNiemYet) {
      setTotalOriginalPrice(book.giaNiemYet * quantity);
    }
  }, [book, quantity]);

  const loadBookDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      // Sử dụng bookId từ URL params
      const id = bookId || '1';
      console.log("Đang gọi API với id:", id, "- Kiểu dữ liệu:", typeof id);

      // Sử dụng hàm API để lấy chi tiết sách
      const bookData = await fetchBookById(id);

      console.log("Dữ liệu sách nhận được:", bookData);

      if (bookData) {
        console.log("ID của sách nhận được:", bookData.maSach, "- Kiểu dữ liệu:", typeof bookData.maSach);
        setBook(bookData);

        // Thiết lập hình ảnh mặc định
        if (bookData.hinhAnhs && bookData.hinhAnhs.length > 0) {
          setSelectedImage(bookData.hinhAnhs[0].duLieuAnh || bookData.hinhAnhs[0].duongDan || null);
        }

        // Khởi tạo giá ban đầu
        if (bookData.giaBan) {
          setTotalPrice(bookData.giaBan);
        }
        if (bookData.giaNiemYet) {
          setTotalOriginalPrice(bookData.giaNiemYet);
        }
      } else {
        throw new Error('Không tìm thấy thông tin sách');
      }
    } catch (error: any) {
      console.error('Error fetching book details:', error);
      setError(error.message || 'Đã xảy ra lỗi khi tải thông tin sách');
    } finally {
      setLoading(false);
    }
  };

  const handleIncrement = () => {
    if (book && quantity < (book.soLuong || 10)) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Hàm tính giảm giá phần trăm
  const calculateDiscountPercentage = (): number => {
    if (book && book.giaNiemYet && book.giaBan && book.giaNiemYet > book.giaBan) {
      return Math.round(((book.giaNiemYet - book.giaBan) / book.giaNiemYet) * 100);
    }
    return 0;
  };

  // Hàm tính số tiền tiết kiệm được
  const calculateSavings = (): number => {
    return totalOriginalPrice - totalPrice;
  };

  const handleAddToCart = () => {
    if (book) {
      // Xử lý thêm vào giỏ hàng ở đây
      alert(`Đã thêm ${quantity} sản phẩm "${book.tenSach}" vào giỏ hàng với giá ${totalPrice.toLocaleString('vi-VN')} ₫`);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning" role="alert">
          Không tìm thấy thông tin sách
        </div>
      </div>
    );
  }

  // Lấy hình ảnh được chọn hoặc hình đầu tiên hoặc sử dụng ảnh mặc định
  const mainImage = selectedImage ||
    (book.hinhAnhs && book.hinhAnhs.length > 0
      ? (book.hinhAnhs[0].duLieuAnh || book.hinhAnhs[0].duongDan || placeholderImg)
      : placeholderImg);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {/* Phần hình ảnh */}
        <div className="col-md-5">
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-body p-0">
              <img
                src={mainImage}
                alt={book.tenSach}
                className="img-fluid main-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = placeholderImg;
                }}
              />
            </div>
          </div>

          {/* Thumbnail images */}
          <div className="row">
            {book.hinhAnhs && book.hinhAnhs.map((image, index) => (
              <div className="col-3 mb-2" key={index}>
                <img
                  src={image.duLieuAnh || image.duongDan || placeholderImg}
                  alt={`Thumbnail ${index + 1}`}
                  className={`img-thumbnail thumbnail ${mainImage === (image.duLieuAnh || image.duongDan) ? 'active-thumbnail' : ''}`}
                  onClick={() => setSelectedImage(image.duLieuAnh || image.duongDan || null)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = placeholderImg;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Phần thông tin chi tiết */}
        <div className="col-md-7">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h1 className="book-title fs-2 fw-bold mb-3">{book.tenSach}</h1>

              <div className="d-flex align-items-center mb-3">
                <div className="ratings text-warning me-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={`fas fa-star${star <= (book.trungBinhXepHang || 0) ? '' : '-o'}`}
                    ></i>
                  ))}
                </div>
                <span className="rating-count text-muted">({book.trungBinhXepHang || 0} sao)</span>
              </div>

              <div className="book-meta mb-3 text-muted">
                <i className="fas fa-user-edit me-2"></i>
                <span className="author">Tác giả: <strong>{book.tenTacGia || 'Chưa cập nhật'}</strong></span>
              </div>

              <hr className="my-4" />

              <div className="pricing mb-4">
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <span className="text-muted me-2">Giá niêm yết:</span>
                    <span className="text-decoration-line-through fs-5 text-muted">
                      {totalOriginalPrice.toLocaleString('vi-VN')} ₫
                    </span>
                  </div>

                  {book.giaNiemYet && book.giaBan && book.giaNiemYet > book.giaBan && (
                    <span className="badge bg-danger">
                      -{calculateDiscountPercentage()}%
                    </span>
                  )}
                </div>

                <div className="mt-2 d-flex align-items-center">
                  <div>
                    <span className="text-muted me-2">Giá bán:</span>
                    <span className="fs-3 fw-bold text-danger">
                      {totalPrice.toLocaleString('vi-VN')} ₫
                    </span>
                  </div>

                  {calculateSavings() > 0 && (
                    <div className="ms-3 bg-light p-2 rounded">
                      <span className="text-success">
                        <i className="fas fa-tags me-1"></i>
                        Tiết kiệm: {calculateSavings().toLocaleString('vi-VN')} ₫
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="stock-info mb-4 d-flex align-items-center">
                <span className={`badge ${book.soLuong && book.soLuong > 0 ? 'bg-success' : 'bg-danger'} me-2`}>
                  {book.soLuong && book.soLuong > 0 ? 'CÒN HÀNG' : 'HẾT HÀNG'}
                </span>
                <span className="stock-quantity text-muted">
                  <i className="fas fa-box me-1"></i>
                  Còn {book.soLuong || 0} sản phẩm
                </span>
              </div>

              <div className="card bg-light p-3 mb-4">
                <div className="quantity-selection mb-3">
                  <label className="form-label fw-bold">Số lượng:</label>
                  <div className="input-group" style={{ maxWidth: "150px" }}>
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={handleDecrement}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <input
                      type="number"
                      className="form-control text-center"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val) && val > 0 && val <= (book.soLuong || 10)) {
                          setQuantity(val);
                        }
                      }}
                      min="1"
                      max={book.soLuong || 10}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={handleIncrement}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>

                {/* Hiển thị tổng giá theo số lượng */}
                <div className="total-price-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Tổng tiền:</span>
                    <span className="fs-4 fw-bold text-danger">{totalPrice.toLocaleString('vi-VN')} ₫</span>
                  </div>
                  {calculateSavings() > 0 && (
                    <div className="text-end mt-1">
                      <small className="text-success">
                        (Tiết kiệm {calculateSavings().toLocaleString('vi-VN')} ₫)
                      </small>
                    </div>
                  )}
                </div>
              </div>

              <div className="d-grid gap-2 d-md-flex">
                <button
                  className="btn btn-primary btn-lg flex-grow-1"
                  onClick={handleAddToCart}
                  disabled={!book.soLuong || book.soLuong <= 0}
                >
                  <i className="fas fa-shopping-cart me-2"></i>
                  Thêm vào giỏ hàng
                </button>
                <button className="btn btn-outline-danger btn-lg">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for additional information */}
      <div className="book-tabs mt-5">
        <div className="card shadow-sm">
          <div className="card-header bg-white">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'moTa' ? 'active' : ''}`}
                  onClick={() => setActiveTab('moTa')}
                >
                  <i className="fas fa-info-circle me-2"></i>
                  Mô tả sản phẩm
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'thongTin' ? 'active' : ''}`}
                  onClick={() => setActiveTab('thongTin')}
                >
                  <i className="fas fa-list-ul me-2"></i>
                  Thông số chi tiết
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'danhGia' ? 'active' : ''}`}
                  onClick={() => setActiveTab('danhGia')}
                >
                  <i className="fas fa-star me-2"></i>
                  Đánh giá
                </button>
              </li>
            </ul>
          </div>

          <div className="card-body">
            {activeTab === 'moTa' && (
              <div className="book-description">
                {book.moTa ? (
                  <div dangerouslySetInnerHTML={{ __html: book.moTa }} />
                ) : (
                  <div className="alert alert-info">
                    <i className="fas fa-info-circle me-2"></i>
                    Chưa có mô tả chi tiết cho sách này.
                  </div>
                )}
              </div>
            )}

            {activeTab === 'thongTin' && (
              <div className="book-specs">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th style={{ width: '30%' }}><i className="fas fa-user-edit me-2"></i>Tác giả</th>
                      <td>{book.tenTacGia || 'Chưa cập nhật'}</td>
                    </tr>
                    <tr>
                      <th><i className="fas fa-file me-2"></i>Số trang</th>
                      <td>Chưa cập nhật</td>
                    </tr>
                    <tr>
                      <th><i className="fas fa-calendar me-2"></i>Năm xuất bản</th>
                      <td>Chưa cập nhật</td>
                    </tr>
                    <tr>
                      <th><i className="fas fa-building me-2"></i>Nhà xuất bản</th>
                      <td>Chưa cập nhật</td>
                    </tr>
                    <tr>
                      <th><i className="fas fa-ruler-combined me-2"></i>Kích thước</th>
                      <td>Chưa cập nhật</td>
                    </tr>
                    <tr>
                      <th><i className="fas fa-box me-2"></i>Số lượng tồn</th>
                      <td>{book.soLuong || 0} sản phẩm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'danhGia' && (
              <div className="book-reviews">
                <div className="text-center p-4">
                  <i className="fas fa-star-half-alt fa-3x text-warning mb-3"></i>
                  <h5 className="mb-3">Đánh giá sản phẩm</h5>
                  <p className="text-muted">Chưa có đánh giá nào cho sản phẩm này.</p>
                  <button className="btn btn-primary mt-3">
                    <i className="fas fa-edit me-2"></i>
                    Viết đánh giá
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sách liên quan */}
      <div className="related-books mt-5">
        <h3 className="section-title mb-4">
          <i className="fas fa-book me-2"></i>
          Sách liên quan
        </h3>
        <div className="row">
          <div className="col-12 text-center text-muted py-5">
            <i className="fas fa-info-circle me-2"></i>
            Đang tải sách liên quan...
          </div>
        </div>
      </div>
    </div>
  )
}
