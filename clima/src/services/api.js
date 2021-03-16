
import axios from 'axios';

export const key = 'a973bdd3';

const api = axios.create({
  baseUrl: 'https://api.hgbrasil.com'
});

export default api;