import {useMutation, useQuery} from 'react-query';
import {api} from 'src/sdk/connection';
import {create} from 'src/sdk/recipes';
import {Recipes} from 'src/types/recipes';
/**
 * Retrieve all recipes saved
 */
export const useRecipeQuery = (limit?: number) =>
  useQuery<Recipes[]>(['recipes'], async () => {
    const limitItems = limit ? `?_limit=${limit}` : '';

    const {data} = await api({
      method: 'GET',
      url: `recipes${limitItems}`,
    });

    return data;
  });

export const useCreateRecipe = () => {
  return useMutation(['recipes'], create, {
    onMutate: () => {},
  });
};
