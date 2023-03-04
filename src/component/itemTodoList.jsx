import Image from "next/image";
import React from "react";

const ItemTodoList = ({ title, completed }) => {
  return (
    <div className="bg-green-300 w-[100%] h-[80px] rounded-xl p-5 items-center flex justify-between">
      <h2 className="font-bold text-xl">{title}</h2>
      <button className="w-[40px] h-[40px] bg-white rounded-xl flex items-center justify-center">
        {completed === true ? (
          <Image
            src={"/icon/success.png"}
            width={25}
            height={25}
            alt="success"
          />
        ) : null}
      </button>
    </div>
  );
};

export default ItemTodoList;
