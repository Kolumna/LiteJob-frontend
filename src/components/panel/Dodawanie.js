import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Dodawanie = () => {
  const { currentUser } = useAuth();

  const titleRef = useRef();
  const contentRef = useRef();
  const priceRef = useRef();

  const [userData, setUserData] = useState([{}]);
  const [dodane, setDodane] = useState(false);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  const [data] = useState({
    title: "",
    content: "",
    location: "Toruń",
    owner_id: "",
    price: "",
  });

  userData.map((element, i) => (
    element.user_id === currentUser.uid &&
    (data.owner_id = element._id)
  ))

  const handleSubmit = (e) => {
    setDodane(false)
    e.preventDefault();
    data.title = titleRef.current.value;
    data.content = contentRef.current.value;
    data.price = priceRef.current.value + 'zł';

    fetch("/oferty", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      setDodane(true)
    });
  };

  return (
    <section className=" w-full flex flex-col items-center justify-center gap-24" style={{ height: "calc(100vh - 100px)" }}>
      {dodane && <p className=" success">Dodano ofertę o nazwie <span className=" font-bold">{titleRef.current.value}</span></p>}
      <p className=" text-4xl md:text-6xl font-bold text-[#4ED1C9]">Dodawanie<span className=" text-black"> ogłoszenia</span></p>
      <form className=" flex justify-center items-center flex-col w-full md:w-[500px] gap-8" onSubmit={handleSubmit}>
        <input className="simple-input" ref={titleRef} type="text" placeholder="tytuł"></input>
        <textarea className="simple-input resize-none" ref={contentRef} type="text" placeholder="treść"></textarea>
        <input className="simple-input" ref={priceRef} type="number" placeholder="pensja(zł na h)"></input>
        <button className="simple-button">Dodaj</button>
      </form>
    </section>
  );
};

export default Dodawanie;
