import { type CategoryModel } from '../models/CategoryModel';
import my_request from './Request';

export async function getCategoryById(categoryId: number): Promise<CategoryModel> {
  try {
    const endpoint = `http://localhost:8080/api/v1/theloai/find/${categoryId}`;
    const response = await my_request(endpoint);

    if (response && response.maTheLoai) {
      return {
        maTheLoai: response.maTheLoai,
        tenTheLoai: response.tenTheLoai,
        danhSachQuyenSach: response.danhSachQuyenSach || []
      };
    }

    throw new Error('Không tìm thấy thể loại');
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Lỗi khi lấy thông tin thể loại: ${error.message}`);
    }
    throw new Error('Lỗi không xác định khi lấy thông tin thể loại');
  }
}

export async function getAllCategories(): Promise<CategoryModel[]> {
  try {
    const endpoint = 'http://localhost:8080/api/v1/theloai/all';
    console.log('Gọi API:', endpoint);
    const response = await my_request(endpoint);

    console.log('Response từ API:', response);
    console.log('Kiểu của response:', typeof response);
    if (Array.isArray(response)) {
      console.log('Số lượng thể loại:', response.length);
    }

    if (!response) {
      throw new Error('Không nhận được dữ liệu từ API');
    }

    // API trả về object có dạng { statusCode, error, message, data }
    if (response.data && Array.isArray(response.data)) {
      const categories = response.data.map((category: any) => {
        console.log('Đang xử lý thể loại:', category);
        return {
          maTheLoai: category.maTheLoai,
          tenTheLoai: category.tenTheLoai,
          danhSachQuyenSach: category.danhSachQuyenSach || []
        };
      });
      console.log('Danh sách thể loại sau khi xử lý:', categories);
      return categories;
    } else {
      console.log('Response không có data hoặc data không phải là mảng:', response);
      throw new Error('Dữ liệu không đúng định dạng');
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Lỗi khi lấy danh sách thể loại: ${error.message}`);
    }
    throw new Error('Lỗi không xác định khi lấy danh sách thể loại');
  }
}
