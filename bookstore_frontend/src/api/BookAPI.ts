
import type BookModel from '../models/BookModel';
import my_request from './Request';

export async function getBook(endpoints: string): Promise<BookModel[]> {
  const result: BookModel[] = [];

  const respone = await my_request(endpoints);
  if (!respone.data || !Array.isArray(respone.data)) {
    console.error('API trả về:', respone);
    throw new Error('Dữ liệu trả về từ API không đúng định dạng!');
  }
  const responData = respone.data;
  for (const item of responData) {
    result.push({
      maSach: item.maSach,
      tenSach: item.tenSach,
      giaBan: item.giaBan,
      giaNiemYet: item.giaNiemYet,
      moTa: item.moTa,
      soLuong: item.soLuong,
      tenTacGia: item.tenTacGia,
      trungBinhXepHang: item.trungBinhXepHang,
      hinhAnhs: item.hinhAnhs
    });
  }
  return result;
}


export async function getAllBook(): Promise<BookModel[]> {
  const endpoints: string = 'http://localhost:8080/api/v1/sachs?sort=maSach,desc';
  return getBook(endpoints);
}

export async function getNewBook(): Promise<BookModel[]> {
  const endpoints: string = 'http://localhost:8080/api/v1/sachs?sort=maSach,desc&current=1&pageSize=3';
  return getBook(endpoints);
}













