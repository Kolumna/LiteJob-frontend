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
          <p className=" text-6xl font-bold" key={i}>Cześć <span className=" text-[#4ED1C9]">{element.first_name}</span>!</p>
        ))
      )}
    </div>
  );
};

export default TestApi;
