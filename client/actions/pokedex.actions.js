import pokedexTypes from './types/pokedex.types';

export const receiveItems = (json, params) => ({
    type: pokedexTypes.RECEIVE_ITEMS,
    items: json.objects,
    meta: json.meta,
    params,
});

export const requestItems = () => ({
    type: pokedexTypes.REQUEST_ITEMS
})

export const fetchItems = (next = '/api/v1/pokemon/?limit=12') => {
  return dispatch => {
    dispatch(requestItems())
    return fetch(`http://pokeapi.co${next}`)
      .then(response => response.json())
      .then(json => {
        return dispatch(receiveItems(json))
        }
      )
  }
}