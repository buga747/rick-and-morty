import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

async function fetchRickAndMortyAPI(query, page = 1) {
  const response = await axios.get(`${query}?page=${page}`);
  // console.log(response);
  return response;
}

export { fetchRickAndMortyAPI };
