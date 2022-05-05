
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiContacts } from './contacts-api';
import { toogleContacts } from './toogleContacts';


export const store = configureStore({

  reducer: {
    [apiContacts.reducerPath]: apiContacts.reducer,
    contacts: toogleContacts.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    apiContacts.middleware,
  ],
});

setupListeners(store.dispatch)