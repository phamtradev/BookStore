async function my_request(endpoints: string) {
  try {
    const response = await fetch(endpoints);
    if (!response.ok) {
      throw new Error(`Không thể truy cập API ${endpoints} - Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Request thành công:', { endpoint: endpoints, data });
    return data;
  } catch (error) {
    console.error('Lỗi khi gọi API:', error);
    throw error;
  }
}

export default my_request;