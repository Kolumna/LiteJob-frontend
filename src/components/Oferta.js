import React from "react";

const Oferta = (props) => {
  return (
    <section className=" w-full flex justify-between p-12">
      <div>
        <span className="text-5xl font-bold">{props.dane.title}</span>
        <p className=" mt-8 text-3xl">{props.dane.content}</p>
      </div>
      <div>
        <span className="text-3xl">Stawka godzinowa <span className="text-8xl font-bold">{props.dane.price}</span></span>
        <div className=" flex items-center justify-end mt-8">
            <span className=" text-[#4ED1C9] ml-2 text-5xl font-bold"><span className=" text-2xl text-black">Lokalizacja: </span>{props.dane.location}</span>
          </div>
      </div>
    </section>
  );
};

export default Oferta;
