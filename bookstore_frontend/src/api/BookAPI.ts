import type BookModel from '../models/BookModel';

async function request(endpoints: string) {
  const respone = await fetch(endpoints)
  if (!respone.ok) {
    throw new Error(`Khong the truy cap API ${endpoints}`);
  }
  return respone.json();
}

export async function getAllBook(): Promise<BookModel[]> {
  const result: BookModel[] = [];
  const endpoints: string = 'http://localhost:8080/api/v1/sachs';
  const respone = await request(endpoints);
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
      trungBinhXepHang: item.trungBinhXepHang
    });
  }
  return result;
}