import type BookModel from './BookModel';

export interface CategoryModel {
  maTheLoai: number;
  tenTheLoai: string;
  danhSachQuyenSach: BookModel[];
}


