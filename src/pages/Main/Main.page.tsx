import { Cards } from '../../components';
import { useGetCardsQuery } from '../../redux/api/cards.api';

export const Main = () => {
  const { data } = useGetCardsQuery(9);

  return data ? <Cards /> : <div>Loading...</div>;
};
