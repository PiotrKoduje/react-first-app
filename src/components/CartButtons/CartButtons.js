import styles from './CartButtons.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite, removeCard } from '../../redux/cardsReducer';
import { useDispatch } from 'react-redux';

const CartButtons = props => {
  const dispatch = useDispatch();
  
  const toggleStar = cardId => {
    dispatch(toggleCardFavorite(cardId));
  };

  const trashHandler = cardId => {
    dispatch(removeCard(cardId));
  };

  return(
    <div className={styles.container}>
      <span className={clsx("fa fa-star-o", styles.star, {[styles.isFavorite] : props.isFavorite })} onClick={() => toggleStar(props.cardId)} />
      <span className={clsx("fa fa-trash", styles.trash)} onClick={() => trashHandler(props.cardId)} />
    </div>
  );
};

export default CartButtons;