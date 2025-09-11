
import type BookModel from '../models/BookModel';
import my_request from './Request';

interface ApiResponse {
  data: BookModel[];
  totalPage: number;
  totalItem: number;

}

export async function getBook(endpoints: string): Promise<ApiResponse> {
  const respone = await my_request(endpoints);
  let data: BookModel[] = [];
  let totalPage = 1;
  let totalItem = 0;

  // Flexible mapping for paginated or non-paginated response
  if (respone.data && Array.isArray(respone.data)) {
    data = respone.data.map((item: any) => ({
      maSach: item.maSach,
      tenSach: item.tenSach,
      giaBan: item.giaBan,
      giaNiemYet: item.giaNiemYet,
      moTa: item.moTa,
      soLuong: item.soLuong,
      tenTacGia: item.tenTacGia,
      trungBinhXepHang: item.trungBinhXepHang,
      hinhAnhs: item.hinhAnhs
    }));
    totalPage = respone.totalPage || 1;
    totalItem = respone.totalItem || data.length;
  } else if (Array.isArray(respone)) {
    data = respone.map((item: any) => ({
      maSach: item.maSach,
      tenSach: item.tenSach,
      giaBan: item.giaBan,
      giaNiemYet: item.giaNiemYet,
      moTa: item.moTa,
      soLuong: item.soLuong,
      tenTacGia: item.tenTacGia,
      trungBinhXepHang: item.trungBinhXepHang,
      hinhAnhs: item.hinhAnhs
    }));
    totalPage = 1;
    totalItem = data.length;
  } else {
    console.error('API trả về:', respone);
    throw new Error('Dữ liệu trả về từ API không đúng định dạng!');
  }
  return { data, totalPage, totalItem };
}



export async function getAllBook(): Promise<ApiResponse> {
  const endpoints: string = 'http://localhost:8080/api/v1/sachs?sort=maSach,desc';
  return getBook(endpoints);
}

export async function getNewBook(): Promise<ApiResponse> {
  const endpoints: string = 'http://localhost:8080/api/v1/sachs?sort=maSach,desc&current=1&pageSize=3';
  return getBook(endpoints);
}













