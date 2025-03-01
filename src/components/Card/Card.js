import styles from './Card.module.scss';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';

const Card = props => {
  return(
    <li className={styles.card}>{props.title}<ButtonFavorite isFavorite={props.isFavorite} cardId={props.cardId}/></li>
  );
};

export default Card;