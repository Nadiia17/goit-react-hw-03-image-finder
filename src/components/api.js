import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '39989925-901ad6a53913725b2cdfb60c2';

export const searchByQuery = async (query, page = 1) => {
  const params = {
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
  };
  //   const response = await axios.get('', { params });
  //   return response.data;
  // };

  try {
    const response = await axios.get('', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    console.error(
      'Error details: ',
      error.response?.data || error.message || error
    );
    throw error;
  }
};
