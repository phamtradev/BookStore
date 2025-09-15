
import BookModel from '../models/BookModel';
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

export async function searchBookByName(nameSearch: string, current: number = 1, pageSize: number = 10): Promise<ApiResponse> {
  if (!nameSearch || nameSearch.trim() === '') {
    return getAllBook();
  }

  const searchTerm = encodeURIComponent(nameSearch.trim());
  const endpoints = `http://localhost:8080/api/v1/sachs/search?tenSach=${searchTerm}&current=${current}&pageSize=${pageSize}`;
  return getBook(endpoints);
}

export async function getBookById(maSach: number | string): Promise<BookModel | null> {
  try {
    console.log("BookAPI.getBookById - Đang gọi API cho sách ID:", maSach, "- Kiểu dữ liệu:", typeof maSach);
    const endpoints = `http://localhost:8080/api/v1/sachs/${maSach}`;
    console.log("Endpoint gọi API:", endpoints);

    const response = await my_request(endpoints);
    console.log("Nhận được response từ API:", response);

    // Kiểm tra cấu trúc dữ liệu trả về
    if (response && response.statusCode === 200 && response.data) {
      const bookData = response.data;
      console.log("Dữ liệu sách từ API:", bookData);

      // Chuyển đổi dữ liệu API thành BookModel
      const book = new BookModel(
        bookData.maSach || 0,
        bookData.tenSach || '',
        bookData.giaBan || 0,
        bookData.giaNiemYet || 0,
        bookData.moTa || '',
        bookData.soLuong || 0,
        bookData.tenTacGia || '',
        bookData.trungBinhXepHang || 0,
        bookData.hinhAnhs || []
      );

      console.log("BookModel được tạo:", book);
      return book;
    }

    console.log("Không tìm thấy dữ liệu sách hợp lệ từ API");
    // Trả về null nếu không có dữ liệu hợp lệ
    return null;
  } catch (error) {
    console.error(`Lỗi khi lấy thông tin sách với ID ${maSach}:`, error);
    throw error;
  }
}

