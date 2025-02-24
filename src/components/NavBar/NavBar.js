import Container from '../Container/Container';
import styles from './NavBar.module.scss'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  return(
    <nav className={styles.navigation}>
      <Container customStyles={styles.navBarContainer}>
        <a href='/'>
          <span className={styles.icon + ' fa fa-tasks'}></span>
        </a>
        <ul>
          {/* <li><a href='/'>Home</a></li> */}
          {/* <li><Link to="/">Home</Link></li> */}
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;