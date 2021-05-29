import { createSlice } from "@reduxjs/toolkit";

const WorkspaceSlice = createSlice({
  name: "workspace",
  initialState: {
    saved: [],
    tabs: [],
    active: -1,
    savedActive: -1,
  },
  reducers: {
    setTabs: (state, action) => {
      state.tabs = [...state.tabs, action.payload];
      state.active = state.tabs.length - 1;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setCode: (state, action) => {
      state.tabs[state.active].code = action.payload;
    },
    setName: (state, action) => {
      state.tabs[state.active].name = action.payload;
    },
    setSaved: (state, action) => {
      state.saved = [...state.saved, action.payload];
      state.savedActive = state.saved.length - 1;
    },
    setSavedActive: (state, action) => {
      state.savedActive = action.payload;
    },
    setClose: (state, action) => {
      state.tabs = state.tabs.filter((item, index) => index !== action.payload);
      state.active = state.active - 1;
    },
  },
});

export const {
  setActive,
  setTabs,
  setCode,
  setName,
  setSaved,
  setSavedActive,
  setClose,
} = WorkspaceSlice.actions;

export default WorkspaceSlice.reducer;
