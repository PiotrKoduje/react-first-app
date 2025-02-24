import styles from './CardForm.module.scss';
import {useState} from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store.js';

const CardForm = props => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title)
    dispatch(addCard({columnId: props.columnId, title: title}));
    setTitle('');
  }

  return(
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput extraStyles={styles.changeInput} value={title} onChange={e => setTitle(e.target.value)}/>
      <Button extraStyles={styles.changeButton}>Add card</Button>
    </form>
  );
};

export default CardForm;