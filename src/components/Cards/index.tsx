import styles from './styles.module.scss';
import { Card } from '../index';
import { Cross, Heart } from '../../assets/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppSelector, useActions } from '../../redux';

export const Cards = () => {
  const [checked, setChecked] = useState(0);
  const navigate = useNavigate();
  const { cards } = useAppSelector(state => state.cards);
  const { deleteCard, likeCard } = useActions();

  const likeButtonClass = styles.button + ' ' + styles.button_heart;

  const handleButtonClick = (
    event: React.MouseEvent<HTMLElement>,
    cardId: number,
  ) => {
    const clickedElement = event.target as HTMLElement;
    const isLikeButton = clickedElement.closest('#like');
    const isDeleteButton = clickedElement.closest('#delete');

    if (isLikeButton) likeCard(cardId);
    else if (isDeleteButton) deleteCard(cardId);
    else navigate(`/${cardId}`);
  };

  const getFilteredCards = () => {
    return checked ? cards?.filter(card => card.like) : cards;
  };

  return (
    <section>
      <label htmlFor="checkbox" className={styles.label}>
        <input
          type="checkbox"
          id="checkbox"
          className={styles.checkbox}
          value={checked}
          onChange={() => setChecked(checked ? 0 : 1)}
        />
        <span>Отсортировать по лайкам</span>
      </label>

      <ul className={styles.list}>
        {!getFilteredCards().length ? (
          <h2 className={styles.title}>Ничего не найдено</h2>
        ) : (
          getFilteredCards()?.map(({ id, title, thumbnailUrl, like }) => (
            <li key={id} onClick={e => handleButtonClick(e, id)}>
              <Card title={title} thumbnailUrl={thumbnailUrl} />

              <button
                className={likeButtonClass + ' ' + (like ? styles.active : '')}
                type="button"
                id="like"
              >
                <Heart />
              </button>

              <button
                className={`${styles.button} ${styles.button_cross}`}
                type="button"
                id="delete"
              >
                <Cross />
              </button>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};
