import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import React from "react";

const TestApi = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  console.log(backendData)

  //const [title, newTitle] = useState("Lite");
  return (
    <div className="p-8">
      <div></div>
      { backendData.length === 1 ? (
        <CircularProgress />
      ) : (
        backendData.map((element, i) => (
          <p className=" text-3xl" key={i}>Cześć {element.first_name}!</p>
        ))
      )}
    </div>
  );
};

export default TestApi;
