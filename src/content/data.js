import { v4 as uuid4 } from 'uuid';

import buff from '../assets/images/buff.jpg';
import spurs from '../assets/images/spurs.jpg';
import nightCity from '../assets/images/night-city.jpg';

export const photoLeft = [
  {
    id: uuid4(),
    img: buff,
    title: '',
    info: '',
    category: 'Wild Life',
  },
  {
    id: uuid4(),
    img: spurs,
    title: '',
    info: '',
    category: 'Art',
  },
];

export const photoMid = [
  {
    id: uuid4(),
    img: nightCity,
    title: '',
    info: '',
    category: 'Cities',
  },
];
