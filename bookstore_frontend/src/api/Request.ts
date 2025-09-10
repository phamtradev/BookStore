async function my_request(endpoints: string) {
  const respone = await fetch(endpoints)
  if (!respone.ok) {
    throw new Error(`Khong the truy cap API ${endpoints}`);
  }
  return respone.json();
}

export default my_request;