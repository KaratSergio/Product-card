import { StarIcon } from '@radix-ui/react-icons';

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0 ? 1 : 0;
  const totalStars = 5;

  return (
    <div className="flex items-center">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="p-0" aria-label={`${index + 1} star`}>
          <StarIcon className="size-4 md:size-5 text-teal-500" />
        </span>
      ))}
      {/* Half star */}
      {halfStar > 0 && (
        <span className="p-0" aria-label="half star">
          <StarIcon className="size-4 md:size-5 text-teal-500 opacity-50" />
        </span>
      )}
      {/* Empty Stars */}
      {[...Array(totalStars - fullStars - halfStar)].map((_, index) => (
        <span key={index} className="p-0" aria-label={`${fullStars + halfStar + index + 1} star`}>
          <StarIcon className="size-4 md:size-5 text-gray-300" />
        </span>
      ))}
      {/* Display rating */}
      <span className="ml-2 text-gray-900 border-b border-gray-700">{rating}/5</span>
    </div>
  );
};

export default StarRating;
