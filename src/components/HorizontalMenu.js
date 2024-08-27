import React from "react";

const HorizontalMenu = () => {
  return (
    <nav className="flex justify-between items-center">
      <ul className="flex">
        <li className="mx-1">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Menu Item 1
          </a>
        </li>
        <li className="mx-1">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Menu Item 2
          </a>
        </li>
        <li className="mx-1">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Menu Item 3
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalMenu;
