import initContacts from 'data/contacts.json';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        const contactExists = state.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        contactExists
          ? alert(`${contactExists.name} this contact already exists`)
          : state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: { ...contact, id: nanoid() },
        };
      },
    },
    deleteContact(state, action) {
      state = state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// deleteContact(state, action) {
//   const index = state.findIndex(contact => contact.id === action.payload);
//   state.splice(index, 1);
// },
