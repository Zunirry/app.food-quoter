import Home from 'src/views/Home';
import Details from 'src/views/Details';

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
    name: 'Details',
    component: Details,
  },
];
