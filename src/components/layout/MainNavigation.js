import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css"
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favsMeetupsContext = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites
              <span className={classes.badge}>{favsMeetupsContext.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
