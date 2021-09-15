import { useContext } from 'react'

import MeetUpList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>;
    } else {
        content = <MeetUpList meetups={favoritesCtx.favorites} />;
    }

    return (
        <section>
            <h1>Favorites Page</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;