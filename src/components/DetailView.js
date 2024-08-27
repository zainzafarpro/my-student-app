import React from "react";

const DetailView = ({ student, onBackClick, onViewToggle }) => {
  return (
    <div>
      <h2>Detail View</h2>
      <p>Student: {student.name}</p>
      <button onClick={onBackClick}>Back</button>
      <button onClick={onViewToggle}>Toggle View</button>
    </div>
  );
};

export default DetailView;
