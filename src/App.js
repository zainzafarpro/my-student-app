import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import GridView from "./components/GridView";
import TileView from "./components/TileView";
import DetailView from "./components/DetailView";

const App = () => {
  const [view, setView] = useState("grid");
  const [students, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://freetestapi.com/api/v1/students")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Header />
      <GridView students={students} />
    </div>
  );
};

export default App;
