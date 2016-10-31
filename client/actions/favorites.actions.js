import favoritesTypes from './types/favorites.types';

export const addFavorite = (id) => ({
    type: favoritesTypes.FAVORITE_ADD,
    id
});
export const removeFavorite = (id) => ({
    type: favoritesTypes.FAVORITE_REMOVE,
    id
});