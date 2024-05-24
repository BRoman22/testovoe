import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from "../../types";

const initialState = {
  cards: [] as ICard[],
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<ICard[]>) => {
      state.cards = action.payload;
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter(card => card.id !== action.payload);
    },
    likeCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.map(card => {
        if (card.id === action.payload) {
          card.like = !card.like;
        }
        return card;
      });
    },
  },
});

export const { setCards } = cardsSlice.actions;
export default cardsSlice;