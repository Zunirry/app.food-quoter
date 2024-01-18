import Details from 'src/views/FoodDetails';
import Home from 'src/views/Home';
import Recipes from 'src/views/Recipes';
import Tabs from 'src/views/Tabs';

interface Routes {
  name: string;
  component: any;
}

export const routes: Routes[] = [
  {
    name: 'Tabs',
    component: Tabs,
  },
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
