import MoreInfo from './shared/MoreInfo';
import StarRating from './shared/StarRating';

const Headphones = () => {
  const moreInfoContent = `
    Feel every frequency with superior precision and clarity. Maximise your immersion with lossless streaming, 
    spatial audio with dynamic head tracking and world-class Active Noise Cancellation. Hear what’s going around 
    you with Aware mode. Enjoy up to 30 hours of battery life, exceptional comfort and flawlessly clear calls. 
    Connect to your devices wirelessly via Bluetooth, or use the included USB-C and 3.5 mm cables. Plus, bring 
    home theatre content to life like never before.
  `;

  return (
    <div id="overview" className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Sonos Ace</h1>
      <p className="text-sm sm:text-base md:text-xl sm:mt-1">Headphones</p>
      <div className="flex items-center justify-between mt-4">
        <p className="text-3xl font-bold">$680</p>
        <StarRating rating={3.5} />
      </div>
      <p className="text-gray-900 font-medium mt-4 text-sm sm:text-base md:text-lg">
        Obsessively crafted and masterfully tuned, these headphones make you feel at one with the sounds that matter most
        to you.
      </p>

      <MoreInfo content={moreInfoContent} />
    </div>
  );
};

export default Headphones;
