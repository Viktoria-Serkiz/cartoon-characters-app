import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  character: [],
  loading: false,
};

const characterSlice = createSlice({
  name: "character",
  initialState: initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setCharacter: (state, { payload }) => {
      state.character = payload;
    },
  },
});

export const getCharacter = (state) => state.character;

const {
  reducer: characterReducer,
  actions: { setLoading, setCharacter },
} = characterSlice;

export { setLoading, setCharacter, characterReducer, initialState };
