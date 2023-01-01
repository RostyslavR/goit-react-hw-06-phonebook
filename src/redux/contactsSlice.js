import initContacts from 'data/contacts.json';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: initContacts },
  reducers: {
    addContact(state, action) {
      const contactExists = state.contacts.find(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      contactExists
        ? alert(`${contactExists.name} this contact already exists`)
        : state.contacts.push({ id: nanoid(), ...action.payload });
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// deleteContact(state, action) {
//   const index = state.findIndex(contact => contact.id === action.payload);
//   state.splice(index, 1);
// },
