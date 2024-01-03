import Home from 'src/views/Home';

interface Routes {
  name: string;
  component: any;
}

export const routes: Routes[] = [
  {
    name: 'Home',
    component: Home,
  },
];
