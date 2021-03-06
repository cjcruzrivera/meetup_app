import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {

  const favsMeetupsContext = useContext(FavoritesContext);

  const itemIsFav = favsMeetupsContext.itemIsFavorite(props.meetup.id);

  function toggleFavoriteHandler() {
    if (itemIsFav) {
      favsMeetupsContext.removeFavorite(props.meetup.id);
    }else{
      favsMeetupsContext.addFavorite(props.meetup);
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>{itemIsFav ? "Remove from Favorites" : "To Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
