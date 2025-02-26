import styles from './ButtonFavorite.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const ButtonFavorite = props => {
  const dispatch = useDispatch();
  const toggleStar = cardId => {
    dispatch(toggleCardFavorite(cardId));
  };

  return(
    <span className={clsx("fa fa-star-o", styles.star, {[styles.isFavorite] : props.isFavorite })} onClick={() => toggleStar(props.cardId)} />
  );
};

export default ButtonFavorite;