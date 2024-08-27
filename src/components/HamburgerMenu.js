import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center relative">
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={handleToggle}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M4 12H20V14H4V12Z" />
          </svg>
        )}
      </button>
      {isOpen && (
        <ul className="absolute top-0 left-0 mt-12 bg-white shadow-md rounded p-4 w-40">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Menu Item 1
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Menu Item 2
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Menu Item 3
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
