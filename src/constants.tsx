import Headphones1Black from './assets/images/headphones/black/Headphones1.webp';
import Headphones2Black from './assets/images/headphones/black/Headphones2.webp';
import Headphones3Black from './assets/images/headphones/black/Headphones3.webp';
import Headphones4Black from './assets/images/headphones/black/Headphones4.webp';

import Headphones1White from './assets/images/headphones/white/Headphones1.webp';
import Headphones2White from './assets/images/headphones/white/Headphones2.webp';
import Headphones3White from './assets/images/headphones/white/Headphones3.webp';
import Headphones4White from './assets/images/headphones/white/Headphones4.webp';

import {
  AccessibilityIcon,
  AvatarIcon,
  StarFilledIcon,
  PersonIcon,
  SpeakerLoudIcon,
  LapTimerIcon,
  TargetIcon,
  LightningBoltIcon,
  SliderIcon,
  FontBoldIcon,
  PlayIcon,
  MobileIcon,
} from '@radix-ui/react-icons';

export const headphonesImg: Record<string, string[]> = {
  black: [Headphones1Black, Headphones2Black, Headphones3Black, Headphones4Black],
  white: [Headphones1White, Headphones2White, Headphones3White, Headphones4White],
};

export const colorsHeadphones = [
  { name: 'Black', value: 'black', hex: '#000000' },
  { name: 'White', value: 'white', hex: '#eeeeee' },
];

export const headphonesFeatures = [
  { name: 'Spatial audio', icon: <AccessibilityIcon className="text-black size-6" /> },
  { name: 'Active Noise Cancellation', icon: <AvatarIcon className="text-black size-6" /> },
  { name: 'Lossless audio', icon: <StarFilledIcon className="text-black size-6" /> },
  { name: 'Aware mode', icon: <PersonIcon className="text-black size-6" /> },
  { name: 'Dolby Atmos', icon: <SpeakerLoudIcon className="text-black size-6" /> },
  { name: '30-hour battery life', icon: <LapTimerIcon className="text-black size-6" /> },
  { name: 'Dynamic head tracking', icon: <TargetIcon className="text-black size-6" /> },
  { name: 'Rapid charging', icon: <LightningBoltIcon className="text-black size-6" /> },
  { name: 'USB-C and 3.5 mm', icon: <SliderIcon className="text-black size-6" /> },
  { name: 'Bluetooth®', icon: <FontBoldIcon className="text-black size-6" /> },
  { name: 'Wear detection', icon: <PlayIcon className="text-black size-6" /> },
  { name: 'Works with Apple and Android', icon: <MobileIcon className="text-black size-6" /> },
].map((feature) => ({
  ...feature,
  name: <span className="text-sm sm:text-base break-words">{feature.name}</span>,
}));
