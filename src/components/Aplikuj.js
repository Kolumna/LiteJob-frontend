import React from "react";

const Aplikuj = (props) => {
  return (
    <section
      className=" w-full flex flex-col items-center justify-center gap-24"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <form
        action="https://formsubmit.co/068658982fa1a63f0165b4f70f37c570"
        method="POST"
        className=" flex justify-center items-center flex-col w-full md:w-[500px] gap-8"
      >
        <h1 className="mb-4">{props.dane.title}</h1>
        <input className="simple-input" name="imie" type="text" placeholder="imię"></input>
        <input
        name="nazwisko"
          className="simple-input"
          type="text"
          placeholder="nazwisko"
        ></input>
        <input
        name="email"
          className="simple-input"
          type="email"
          placeholder="email"
        ></input>
        <textarea
        name="tresc"
          className="simple-input resize-none"
          type="text"
          placeholder="treść"
        ></textarea>
        <button className="simple-button">Wyślij</button>
      </form>
    </section>
  );
};

export default Aplikuj;
