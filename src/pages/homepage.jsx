import HeaderApp from "@/component/header";
import ItemTodoList from "@/component/itemTodoList";
import ModalAdd from "@/component/modalAdd";
import Pagination from "@/component/pagination";
import { addData, getData } from "@/service/redux/action/dataSlices";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [title, setTitle] = useState(null);

  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    if (stateData !== null) {
      setData(stateData.data);
    }
  }, [stateData]);

  const handleSubmit = () => {
    setModalAdd(false);
    alert("the data has been added");
    const request = { title: title };
    dispatch(addData(request));
    console.log("oke", title);
  };

  return (
    <div className="flex flex-col items-center ">
      <HeaderApp />
      <ModalAdd
        modalAdd={modalAdd}
        handleCancel={() => setModalAdd(false)}
        value={title}
        onSubmit={handleSubmit}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="w-[90%] mt-[20px]">
        <div className="flex justify-between items-center mb-5">
          <h1 className="font-bold text-2xl ">ACTIVITY</h1>
          <button
            onClick={() => setModalAdd(true)}
            className="bg-green-500 text-white px-4 py-1 rounded-xl text-xl"
          >
            Tambah Todolist
          </button>
        </div>
        <div className="grid grid-cols-1 gap-y-5">
          {(data !== null ? data : []).map((item, index) => {
            return (
              <>
                <ItemTodoList
                  key={index}
                  title={item.title}
                  completed={item.completed}
                />
              </>
            );
          })}
        </div>
        <br />
        <Pagination />
        <br />
      </div>
    </div>
  );
};

export default Homepage;
