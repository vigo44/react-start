import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { interfaceCharacter } from '../components/card/card';

interface interfaceServerResponseCards {
  info: interfaceInfo;
  results: interfaceCharacter[];
}

interface interfaceInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export const rickMortyApi = createApi({
  reducerPath: 'rickandmorty',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (build) => ({
    cards: build.query<interfaceServerResponseCards, string>({
      query: (path) => ({
        url: path ? path : 'https://rickandmortyapi.com/api/character',
      }),
    }),
    card: build.query<interfaceCharacter, string>({
      query: (id) => ({
        url: `https://rickandmortyapi.com/api/character/${id}`,
      }),
    }),
    search: build.query<interfaceCharacter, string>({
      query: (name) => ({
        url: name.trim()
          ? `https://rickandmortyapi.com/api/character/?name=${name}`
          : `https://rickandmortyapi.com/api/character`,
      }),
    }),
  }),
});

export const { useCardsQuery } = rickMortyApi;
