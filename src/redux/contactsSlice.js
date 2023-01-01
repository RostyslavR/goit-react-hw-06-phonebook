import initContacts from 'data/contacts.json';
import { createSlice, nanoid } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'phoneBook',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact } = contactsSlice.actions;

// deleteContact(state, action) {
//   const index = state.findIndex(contact => contact.id === action.payload);
//   state.splice(index, 1);
// },
