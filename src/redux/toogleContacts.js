import { createSlice } from '@reduxjs/toolkit';

export const toogleContacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  // reducers: {
  //   addedContacts: (state, { payload }) => {
  //     state.items.push(payload);
  //   },

  //   removeContacts: (state, { payload }) => {
  //     state.items = state.items.filter(({ id }) => id !== payload);
  //   },

  //   contactsFilter: (state, { payload }) => {
  //     state.filter = payload;      
  //   }    
  // },
});


export const { addedContacts, removeContacts, contactsFilter } = toogleContacts.actions;
export default toogleContacts.reducer;

