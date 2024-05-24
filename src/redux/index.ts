import { configureStore, bindActionCreators } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cardsApi } from './api/cards.api';
import cardsSlice from './slices/cards.slice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

const actions = {
  ...cardsSlice.actions,
};

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useActions = () => bindActionCreators(actions, useAppDispatch());