import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/people" end>
            People
          </NavLink>
        </li>
        <li>
          <NavLink to="/not-found" end>
            Not Found
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
