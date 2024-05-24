import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard } from "../../types";
import { setCards } from '../slices/cards.slice';

const URL = 'https://jsonplaceholder.typicode.com/';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getCards: build.query<ICard[], number>({
      query: (limit) => ({
        url: `photos?_limit=${limit}`
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        const modifiedData = data.map(item => ({ ...item, like: false }));
        dispatch(setCards(modifiedData));
      }
    }),
  }),
})

export const { useGetCardsQuery } = cardsApi;
