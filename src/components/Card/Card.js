import styles from './Card.module.scss';
import CartButtons from '../CartButtons/CartButtons';

const Card = props => {
  return(
    <li className={styles.card}>
      <span className={styles.title}>{props.title}</span>
      <CartButtons
       isFavorite={props.isFavorite} 
        cardId={props.cardId}
      />
    </li>
  );
};

export default Card;