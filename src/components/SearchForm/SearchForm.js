import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearching, getSearchString } from '../../redux/searchStringReducer.js';


const SearchForm = () => {
  
  const searchStringFromStore = useSelector(getSearchString);
  const [searchString, setSearchString] = useState(searchStringFromStore);
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearching(searchString));
  };
  
  return(
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchString} onChange={e => setSearchString(e.target.value)} />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;