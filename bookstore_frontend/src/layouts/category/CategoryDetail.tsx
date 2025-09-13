import React, { useEffect, useState } from 'react';
import { getCategoryById } from '../../api/CategoryAPI';

import { BookProps } from '../product/components/BookProps';
import type { CategoryModel } from '../../models/CategoryModel';

interface CategoryDetailProps {
  categoryId: number;
}

export const CategoryDetail: React.FC<CategoryDetailProps> = ({ categoryId }) => {
  const [category, setCategory] = useState<CategoryModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const data = await getCategoryById(categoryId);
        setCategory(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Có lỗi xảy ra khi tải thông tin thể loại');
        setCategory(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  if (!category) {
    return (
      <div className="alert alert-info" role="alert">
        Không tìm thấy thông tin thể loại
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">{category.tenTheLoai}</h2>
        </div>
      </div>

      <div className="row">
        {category.danhSachQuyenSach.length > 0 ? (
          category.danhSachQuyenSach.map((book) => (
            <div className="col-md-3 mb-4" key={book.maSach}>
              <BookProps book={book} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-info">
              Không có sách nào trong thể loại này
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
