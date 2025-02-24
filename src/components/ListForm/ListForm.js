import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store.js';

const ListForm = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(title && description)
      dispatch(addList({title, description}));
    setTitle('');
    setDescription('');
  }

  return(
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title:<TextInput extraStyles={styles.changeInput} value={title} onChange={e => setTitle(e.target.value)} />
      Description:<TextInput extraStyles={styles.changeInput} value={description} onChange={e => setDescription(e.target.value)} />
    <Button extraStyles={styles.changeButton}>Add column</Button>
  </form>
  );
};

export default ListForm;