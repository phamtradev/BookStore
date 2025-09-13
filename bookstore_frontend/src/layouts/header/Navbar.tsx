import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type CategoryModel } from '../../models/CategoryModel';
import { getAllCategories } from '../../api/CategoryAPI';

interface NavbarProps {
  nameSearch: string;
  setNameSearch: (nameSearch: string) => void;
}

export const Navbar = ({ nameSearch, setNameSearch }: NavbarProps) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(nameSearch);
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        console.log('Bắt đầu tải danh sách thể loại...');
        const data = await getAllCategories();
        console.log('Dữ liệu thể loại nhận được:', data);
        setCategories(data);
      } catch (error) {
        console.error('Lỗi khi tải danh sách thể loại:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Log categories mỗi khi nó thay đổi
  useEffect(() => {
    console.log('categories state đã cập nhật:', categories);
  }, [categories]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setNameSearch(inputValue);
  };

  const handleCategoryClick = (categoryId: number) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Bookstore</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Trang chủ</a>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => {
                    e.preventDefault();
                    // Log để kiểm tra categories
                    console.log('Categories:', categories);
                  }}
                >
                  Thể loại sách
                </button>
                <ul className="dropdown-menu">
                  {loading ? (
                    <li><span className="dropdown-item">Đang tải...</span></li>
                  ) : categories.length > 0 ? (
                    categories.map((category) => (
                      <li key={category.maTheLoai}>
                        <button
                          className="dropdown-item"
                          onClick={() => handleCategoryClick(category.maTheLoai)}
                        >
                          {category.tenTheLoai}
                        </button>
                      </li>
                    ))
                  ) : (
                    <li><span className="dropdown-item">Không có thể loại</span></li>
                  )}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Quy định bán hàng
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleInputChange}
                value={inputValue}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className='navbar-nav me-1'>
              <li className='nav-item'>
                <a className='nav-link' href="#">
                  <i className='fas fa-shopping-cart'></i>
                </a>
              </li>
            </ul>
            <ul className='navbar-nav me-1'>
              <li className='nav-item'>
                <a className='nav-link' href="#">
                  <i className='fas fa-user'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
