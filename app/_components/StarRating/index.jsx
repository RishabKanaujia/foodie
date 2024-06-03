// components/StarRating.js
import { useState } from "react";

const StarRating = ({ rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <svg
          key={value}
          className={`w-8 h-8 cursor-pointer ${
            (hoverRating || rating) >= value ? "text-yellow-500" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => handleClick(value)}
          onMouseEnter={() => handleMouseEnter(value)}
          onMouseLeave={handleMouseLeave}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.917c.969 0 1.371 1.24.588 1.81l-3.978 2.892a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.892a1 1 0 00-1.175 0l-3.978 2.892c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.022 9.401c-.784-.57-.38-1.81.588-1.81h4.917a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
