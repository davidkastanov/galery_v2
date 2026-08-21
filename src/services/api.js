import axios from 'axios';

const API_KEY = '43939059-82037ce659ff5fe467fbb9985';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get('', {
    params: {
      q: query,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data.hits;
};