import React from "react";

const ModalAdd = ({ modalAdd, handleCancel, value, onSubmit, onChange }) => {
  return (
    <>
      {modalAdd === true ? (
        <div className="bg-black/50 w-[100%] h-[100vh] absolute items-center justify-center flex">
          <div className="bg-white w-[400px] h-[400px] rounded-xl">
            <div className="justify-end flex px-4 py-3 font-bold text-4xl">
              <button
                onClick={handleCancel}
                className="border-[5px] rounded-xl px-3 border-black"
              >
                X
              </button>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-4xl mb-8">Tambah Item Todolist</h2>
              <input
                placeholder="Silahkan isi judul list todo"
                className="border-2 border-black px-4 py-2 rounded-xl text-xl"
                value={value}
                onChange={onChange}
              ></input>
              <br />
              <button
                onClick={onSubmit}
                type="submit"
                className="bg-green-500 text-white px-4 py-1 rounded-xl text-xl"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalAdd;
