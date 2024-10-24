import Headphones1Black from './assets/images/headphones/black/Headphones1.webp';
import Headphones2Black from './assets/images/headphones/black/Headphones2.webp';
import Headphones3Black from './assets/images/headphones/black/Headphones3.webp';
import Headphones4Black from './assets/images/headphones/black/Headphones4.webp';

import Headphones1White from './assets/images/headphones/white/Headphones1.webp';
import Headphones2White from './assets/images/headphones/white/Headphones2.webp';
import Headphones3White from './assets/images/headphones/white/Headphones3.webp';
import Headphones4White from './assets/images/headphones/white/Headphones4.webp';

export const headphonesImg: Record<string, string[]> = {
  black: [Headphones1Black, Headphones2Black, Headphones3Black, Headphones4Black],
  white: [Headphones1White, Headphones2White, Headphones3White, Headphones4White],
};

export const colorsHeadphones = [
  { name: 'Black', value: 'black', hex: '#000000' },
  { name: 'White', value: 'white', hex: '#eeeeee' },
];
