import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiContacts } from './contacts-api';



export const store = configureStore({

  reducer: {
    [apiContacts.reducerPath]: apiContacts.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    apiContacts.middleware,
  ],
});

// eslint-disable-next-line import/no-anonymous-default-export
// export default{store}
setupListeners(store.dispatch)