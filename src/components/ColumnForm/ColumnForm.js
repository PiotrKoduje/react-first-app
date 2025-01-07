import styles from './ColumnForm.module.scss';
import {useState} from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput.js';

const ColumnForm = (props) => {
  
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon});
    setTitle('');
    setIcon('');
  }
  
  return(
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title:<TextInput extraStyles={styles.changeInput} value={title} onChange={e => setTitle(e.target.value)} />
      Icon:<TextInput extraStyles={styles.changeInput} value={icon} onChange={e => setIcon(e.target.value)} />
      <Button extraStyles={styles.changeButton}>Add column</Button>
    </form>
  );
};

export default ColumnForm;