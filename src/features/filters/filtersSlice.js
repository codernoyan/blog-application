import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortTitle: '',
  filterTitle: 'All',
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    selectSort: (state, action) => {
      state.sortTitle = action.payload;
    },
    selectedFilter: (state, action) => {
      state.filterTitle = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { selectSort, selectedFilter } = filtersSlice.actions;