import {api} from './connection';

export const create = async () => {
  const {data} = await api({
    url: 'recipes',
    method: 'POST',
  });

  return data;
};

export const get = async () => {
  const {data} = await api({
    url: 'recipes',
    method: 'GET',
  });

  return data;
};
