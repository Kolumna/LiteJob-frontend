import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Oferta = (props) => {
  const [userData, setUserData] = useState([{}]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  return (
    <section
      className=" flex flex-col h-full w-full"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div className=" w-full flex justify-between p-12 h-full">
        <div className=" w-full flex flex-col">
          <div className="flex justify-start items-center text-2xl font-bold">
            <svg
              className=" mr-2"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_108_7"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="31"
                height="31"
              >
                <rect width="31" height="31" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_108_7)">
                <path
                  d="M2.58331 28.4166V12.8844L11.625 9.04165V11.625L18.0833 9.04165V12.9166H28.4166V28.4166H2.58331ZM5.16665 25.8333H25.8333V15.5H15.5V12.8521L9.04165 15.4354V12.9166L5.16665 14.6281V25.8333ZM14.2083 23.25H16.7916V18.0833H14.2083V23.25ZM9.04165 23.25H11.625V18.0833H9.04165V23.25ZM19.375 23.25H21.9583V18.0833H19.375V23.25ZM28.4166 12.9166H21.9583L23.25 2.58331H27.125L28.4166 12.9166Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
            {userData.map(
              (user, i) =>
                user._id === props.dane.owner_id && <span>{user.company}</span>
            )}
          </div>
          <span className="text-5xl font-bold mt-2">{props.dane.title}</span>
          <span className="text-lg mt-8">
            Rodzaj umowy:{" "}
            <span className=" text-2xl font-bold text-[#4ED1C9]">
              umowa-zlecenie
            </span>
          </span>
          <p className=" mt-8 text-3xl">{props.dane.content}</p>
        </div>
        <div className=" flex flex-col justify-start items-end w-full">
          <span className="text-3xl">
            Stawka godzinowa{" "}
            <span className="text-8xl font-bold">{props.dane.price}</span>
          </span>
          <div className=" flex items-center justify-end mt-8">
            <span className=" text-[#4ED1C9] ml-2 text-5xl font-bold">
              <span className=" text-2xl text-black">Lokalizacja: </span>
              {props.dane.location}
            </span>
          </div>
          <div className=" mt-12 border-4 border-[#4ED1C9] w-full h-1/2">
            <iframe
              title="mapa"
              width="100%"
              height="100%"
              src="https://api.maptiler.com/maps/493bcfed-b3bd-40dc-8481-2a8bf0de4d2f/?key=zinS1wlCxvs7Sqeojrxg#11.0/53.02098/18.77182"
            ></iframe>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center w-full p-12">
        <button className=" simple-button">Aplikuj</button>
      </div>
    </section>
  );
};

export default Oferta;
