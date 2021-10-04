import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    itemIsFavorite: (meetupId) => { }
});


export function FavoritesContextProvider(props) {

    const [favorites, setFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setFavorites((prevFavorites) => {
            return prevFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setFavorites((prevFavorites) => {
            return prevFavorites.filter((meetup) => {
                return meetup.id !== meetupId;
            });
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return favorites.some((meetup) => {
            return meetup.id === meetupId;
        });
    }

    const context = {
        favorites: favorites,
        totalFavorites: favorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}


export default FavoritesContext;