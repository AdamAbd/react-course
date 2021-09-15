import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetUp) => { },
    removeFavorite: (meetUpId) => { },
    itemIsFavorite: (meetUpId) => { },
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetUp) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetUp);
        });
    }

    function removeFavoriteHandler(meetUpId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetUp => meetUp.id !== meetUpId);
        });
    }

    function itemIsFavoriteHandler(meetUpId) {
        return userFavorites.some(meetUp => meetUp.id === meetUpId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;