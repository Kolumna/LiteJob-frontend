import React from "react";
// import { useEffect } from "react";
// import { useRef } from "react";
// import { useState } from "react";
// import { useAuth } from "../../context/AuthContext";

const EdycjaOgloszenia = (promps) => {
  // const { currentUser } = useAuth();

  // const titleRef = useRef();
  // const contentRef = useRef();
  // const priceRef = useRef();

  // const [userData, setUserData] = useState([{}]);

  // useEffect(() => {
  //   fetch("/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserData(data);
  //     });
  // }, []);

  // const [data, setData] = useState({
  //   title: "",
  //   content: "",
  //   location: "Toruń",
  //   owner_id: "",
  //   price: "",
  // });

  // userData.map((element, i) => (
  //   element.user_id === currentUser.uid &&
  //   (data.owner_id = element._id)
  // ))

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   data.title = titleRef.current.value;
  //   data.content = contentRef.current.value;
  //   data.price = priceRef.current.value;

  //   fetch("/oferty", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   }).then(() => {
  //     console.log("Dodano nową ofertę", data);
  //   });
  // };

  return (
    <section className=" p-8">
      <h1><span className=" text-[#4ED1C9]">Awaria</span> | Edycja ofert tymczasowo nieczynna</h1>
    </section>
  );
};

export default EdycjaOgloszenia;
