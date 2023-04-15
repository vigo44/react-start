import { configureStore } from '@reduxjs/toolkit';
import { rickMortyApi } from './rick-morty.api';
import usersReducer from './users-slice';
import searchInputReducer from './search-input-slice';

export const store = configureStore({
  reducer: {
    [rickMortyApi.reducerPath]: rickMortyApi.reducer,
    users: usersReducer,
    serchInput: searchInputReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
