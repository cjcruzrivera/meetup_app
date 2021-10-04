import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(props){

    const favsMeetupsContext = useContext(FavoritesContext);

    let content;

    if(favsMeetupsContext.totalFavorites > 0){
        content = <MeetupList meetups={favsMeetupsContext.favorites} />
    }else{
        content = <p>You got no favorites yet!</p>
    }

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>;
}

export default FavoritesPage;