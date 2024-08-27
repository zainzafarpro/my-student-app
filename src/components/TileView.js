import React from "react";

const TileView = ({ students }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg">dada</h2>
      <p className="text-gray-600">dada</p>
      <p className="text-gray-600">dada</p>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        View Details
      </button>
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
        Edit
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete
      </button>
    </div>
  );
};

export default TileView;
