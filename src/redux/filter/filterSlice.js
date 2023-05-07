import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { filterContact } = filterSlice.actions;
