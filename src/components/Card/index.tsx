import styles from './styles.module.scss';

interface ICard {
  title: string;
  thumbnailUrl: string;
}

export const Card = ({ title, thumbnailUrl }: ICard) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={thumbnailUrl} alt={title} />
      <p className={styles.title}>{title}</p>
    </div>
  );
};
