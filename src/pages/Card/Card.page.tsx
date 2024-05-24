import { useAppSelector } from '../../redux';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { Heart } from '../../assets/icons';
import { useActions } from '../../redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export const Card = () => {
  const { cards } = useAppSelector(state => state.cards);
  const { likeCard } = useActions();
  const { id } = useParams();
  const currentCard = cards.find(item => item.id === Number(id));
  const navigate = useNavigate();

  const likeButtonClass = styles.button + ' ' + styles.button_heart;

  return (
    <section className={styles.card}>
      <img
        className={styles.image}
        src={currentCard?.url}
        alt={currentCard?.title}
      />

      <button
        className={
          likeButtonClass + ' ' + (currentCard?.like ? styles.active : '')
        }
        type="button"
        id="like"
        onClick={() => likeCard(Number(id))}
      >
        <Heart />
      </button>

      <h2>{currentCard?.title}</h2>

      <button
        className={`${styles.button} ${styles.button_home}`}
        type="button"
        onClick={() => navigate(ROUTES.MAIN, { replace: true })}
      >
        Вернуться на главную
      </button>
    </section>
  );
};
