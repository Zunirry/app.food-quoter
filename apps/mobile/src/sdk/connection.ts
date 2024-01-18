import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://pokeapi.co/api/v2/',
  baseURL: 'http://localhost:3000/',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: '',
  //     'max-age': '0',
  //   },
});
