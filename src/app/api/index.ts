const KEY = '?client_id=70159e519bf6e66b599c498ba2809b62a3b06b84169b964dcdf5fb2c93670ece';
const PHOTOS_URL = 'https://api.unsplash.com/photos/';

const fetchImages = async (page: number) => {
  const response = await fetch(`${PHOTOS_URL}${KEY}&per_page=3&page=${page}`);
  const data = await response.json();

  if (response.status >= 400) {
      throw new Error(data.errors);
  }

  return data;
}

const fetchImageStats = async (id: number) => {
  const response = await fetch(`${PHOTOS_URL}/${id}/statistics${KEY}`);
  const data = await response.json();

  if (response.status >= 400) {
      throw new Error(data.errors);
  }
  return data;
};

export {
  fetchImages,
  fetchImageStats,
};