import { hitAddTodos, hitDataTodos } from "@/service/api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};
export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setReduc: (state, action) => {
      state.data = action.payload;
      console.log("sukses cek reducer profile");
    },
  },
});
export const getData = (request) => async (dispatch) => {
  try {
    const response = await hitDataTodos(request);
    dispatch(setReduc(response.data));
  } catch (err) {
    dispatch(setReduc(err.response.data));
  }
};

export const addData = (request) => async (dispatch) => {
  try {
    const response = await hitAddTodos(request);
    console.log(response.data);
  } catch (err) {
    console.log(err.response);
  }
};

export const { setReduc } = DataSlice.actions;
export default DataSlice.reducer;
