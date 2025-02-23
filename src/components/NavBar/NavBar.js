import Container from '../Container/Container';
import styles from './NavBar.module.scss'

const NavBar = () => {

  return(
    <nav className={styles.navigation}>
      <Container customStyles={styles.navBarContainer}>
        <a href='/'>
          <span className={styles.icon + ' fa fa-tasks'}></span>
        </a>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/favorite'>Favorite</a></li>
          <li><a href='about'>About</a></li>
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;