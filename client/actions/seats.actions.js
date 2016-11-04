import seatsTypes from './types/seats.types';
import api from '../config/api';
const apiURL = api.base + 'seats';

export const receiveSeats = (json) => ({
    type: seatsTypes.RECEIVE_SEATS,
    seats: json.data.seats
});

export const addSeat = (seat) => ({
    type: seatsTypes.ADD_SEAT,
    seat: seat
});

export const openSeatDetails = (seatId) => ({
    type: seatsTypes.OPEN_SEAT_DETAILS,
    seatId: seatId
});

export const getSeats = () => {
  return dispatch => {
    return fetch(apiURL)
      .then(response => response.json())
      .then(json => {
          if (json.status === 'success' && json.data && json.data.seats) {
            return dispatch(receiveSeats(json));
          }
        }
      ).catch(err => console.log(err))
  }
}

export const newSeat = () => {
  return dispatch => {
    return fetch(apiURL, {
      method: 'POST',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => {
          if (json.status === 'success' && json.data && json.data.seat) {
            return dispatch(addSeat(json.data.seat));
          }
          if (json.status === 'error' && json.error) {
            console.log(json.error);
          }
        }
      ).catch(err => console.log(err))
  }
}