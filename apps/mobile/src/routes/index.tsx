import Details from 'src/views/FoodDetails';
import Home from 'src/views/Home';
import Recipes from 'src/views/Recipes';

interface Routes {
  name: string;
  component: any;
}

export const routes: Routes[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'All recipes',
    component: Recipes,
  },
  {
    name: 'Details',
    component: Details,
  },
];
