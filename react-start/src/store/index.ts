import { configureStore } from '@reduxjs/toolkit';
import { rickMortyApi } from './rick-morty.api';

export const store = configureStore({
  reducer: { [rickMortyApi.reducerPath]: rickMortyApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickMortyApi.middleware),
});
