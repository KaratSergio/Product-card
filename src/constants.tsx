import Headphones1Black from './assets/images/headphones/black/Headphones1.webp';
import Headphones2Black from './assets/images/headphones/black/Headphones2.webp';
import Headphones3Black from './assets/images/headphones/black/Headphones3.webp';
import Headphones4Black from './assets/images/headphones/black/Headphones4.webp';
import Headphones5Black from './assets/images/headphones/black/Headphones5.webp';
import Headphones6Black from './assets/images/headphones/black/Headphones6.webp';
import Headphones7Black from './assets/images/headphones/black/Headphones7.webp';
import Headphones8Black from './assets/images/headphones/black/Headphones8.webp';
import Headphones9Black from './assets/images/headphones/black/Headphones9.webp';
import Headphones10Black from './assets/images/headphones/black/Headphones10.webp';
import Headphones11Black from './assets/images/headphones/black/Headphones11.webp';
import Headphones12Black from './assets/images/headphones/black/Headphones12.webp';

import Headphones1White from './assets/images/headphones/white/Headphones1.webp';
import Headphones2White from './assets/images/headphones/white/Headphones2.webp';
import Headphones3White from './assets/images/headphones/white/Headphones3.webp';
import Headphones4White from './assets/images/headphones/white/Headphones4.webp';
import Headphones5White from './assets/images/headphones/white/Headphones5.webp';
import Headphones6White from './assets/images/headphones/white/Headphones6.webp';
import Headphones7White from './assets/images/headphones/white/Headphones7.webp';
import Headphones8White from './assets/images/headphones/white/Headphones8.webp';
import Headphones9White from './assets/images/headphones/white/Headphones9.webp';
import Headphones10White from './assets/images/headphones/white/Headphones10.webp';
import Headphones11White from './assets/images/headphones/white/Headphones11.webp';
import Headphones12White from './assets/images/headphones/white/Headphones12.webp';

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
  black: [
    Headphones1Black,
    Headphones2Black,
    Headphones7Black,
    Headphones3Black,
    Headphones4Black,
    Headphones8Black,
    Headphones12Black,
    Headphones11Black,
    Headphones9Black,
    Headphones6Black,
    Headphones5Black,
    Headphones10Black,
  ],
  white: [
    Headphones1White,
    Headphones2White,
    Headphones5White,
    Headphones3White,
    Headphones4White,
    Headphones6White,
    Headphones7White,
    Headphones8White,
    Headphones9White,
    Headphones10White,
    Headphones11White,
    Headphones12White,
  ],
};

export const colorsHeadphones = [
  { name: 'Black', value: 'black', hex: '#000000' },
  { name: 'White', value: 'white', hex: '#dcdbdb82' },
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
