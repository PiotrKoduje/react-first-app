import styles from './Favorite.module.scss';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsReducer.js';
import Card from '../Card/Card';
import clsx from 'clsx';

const Favorite = () => {
const cards = useSelector(getFavoriteCards);
const noFavorites = cards.length === 0;

  return(
    <Container>
      <PageTitle>favorite</PageTitle>
      {noFavorites  && <p className={styles.warning}>No favorites yet...</p>}
      <article className={clsx(styles.column, {[styles.hide] : noFavorites})}>
        {cards.map(card => <Card key={card.id} cardId={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
      </article>
    </Container>
  );
};

export default Favorite;