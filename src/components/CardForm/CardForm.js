import styles from './CardForm.module.scss';
import {useState} from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput.js';

const CardForm = props => {

  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title}, props.columnId);
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