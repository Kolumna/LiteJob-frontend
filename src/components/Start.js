import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const TestApi = () => {
  const [ofertaData, setOfertaData] = useState([{}]);
  const [userData, setUserData] = useState([{}]);

  useEffect(() => {
    fetch("/oferty")
      .then((res) => res.json())
      .then((data) => {
        setOfertaData(data);
      });
  }, []);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  //const [title, newTitle] = useState("Lite");
  return (
    <div
      className="p-8 w-full overflow-y-auto"
      style={{ height: "calc(100vh - 100px)" }}
    >
      {ofertaData.map((element, i) =>
        element.title === undefined ? (
          <div key={i} className=" flex justify-center w-full mt-8">
            <CircularProgress className=" absolute" />
          </div>
        ) : (
          <div
            className=" flex justify-between border-4 border-black rounded-md p-8 mt-8 first:mt-0"
            key={i}
          >
            <div>
              <p className=" text-2xl lg:text-4xl font-bold">
                <span className=" text-[#4ED1C9]">{element.title}</span>
              </p>
              <p className=" text-md lg:text-xl mt-4 font-bold">
                <span className=" text-[#000000]">
                  {userData.map(
                    (user, i) =>
                      user._id === element.owner_id && (
                        <span>{user.company}</span>
                      )
                  )}
                </span>
              </p>
              <a href={`/${element._id}`}>
                <button className="simple-button mt-12 p-2 pl-5 pr-5">
                  <span className=" text-md lg:text-lg">Więcej</span>
                </button>
              </a>
            </div>
            <div className=" flex flex-col justify-between items-end">
              <p className=" text-3xl lg:text-5xl font-bold">
                {element.price}
                <span className=" text-[#4ED1C9]">/h</span>
              </p>
              <p className=" flex items-center text-xl mt-12 font-bold">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_32_42"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_32_42)">
                    <path
                      d="M12 12C12.55 12 13.021 11.804 13.413 11.412C13.8043 11.0207 14 10.55 14 10C14 9.45 13.8043 8.979 13.413 8.587C13.021 8.19567 12.55 8 12 8C11.45 8 10.9793 8.19567 10.588 8.587C10.196 8.979 10 9.45 10 10C10 10.55 10.196 11.0207 10.588 11.412C10.9793 11.804 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7873 16.525 14.262C17.5083 12.7373 18 11.3833 18 10.2C18 8.38333 17.4207 6.89567 16.262 5.737C15.104 4.579 13.6833 4 12 4C10.3167 4 8.89567 4.579 7.737 5.737C6.579 6.89567 6 8.38333 6 10.2C6 11.3833 6.49167 12.7373 7.475 14.262C8.45833 15.7873 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.31267 17.5957 5.988 15.637C4.66267 13.679 4 11.8667 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.021 2.74167 9.88333 2 12 2C14.1167 2 15.979 2.74167 17.587 4.225C19.1957 5.70833 20 7.7 20 10.2C20 11.8667 19.3377 13.679 18.013 15.637C16.6877 17.5957 14.6833 19.7167 12 22Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
                <span className=" text-[#000000] ml-2 lg:text-3xl">{element.location}</span>
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TestApi;
