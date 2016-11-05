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

export const moveSeat = (seat) => ({
    type: seatsTypes.MOVE_SEAT,
    seatId: seat.id,
    coordinates: {
      x: seat.left,
      y: seat.top
    }
});

export const updateSeat = (seat) => ({
    type: seatsTypes.UPDATE_SEAT,
    seat: seat
});

export const deleteSeat = (seat) => ({
    type: seatsTypes.DELETE_SEAT,
    seat: seat
});

export const openSeatDetails = (seatId) => ({
    type: seatsTypes.OPEN_SEAT_DETAILS,
    seatId: seatId
});

export const closeSeatDetails = () => ({
    type: seatsTypes.CLOSE_SEAT_DETAILS,
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
      credentials: 'same-origin'
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

export const saveSeat = (data) => {
  console.log(data)
  if (!data.seatId) {return;}
  return dispatch => {
    return fetch(`${apiURL}/${data.seatId}`, {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data.body)
    })
      .then(response => response.json())
      .then(json => {
          if (json.status === 'success' && json.data && json.data.seat) {
            return dispatch(updateSeat(json.data.seat));
          }
          if (json.status === 'error' && json.error) {
            console.log(json.error);
          }
        }
      ).catch(err => console.log(err))
  }
}

export const apiSeatDelete = (data) => {
  if (!data.seatId) {return;}
  return dispatch => {
    return fetch(`${apiURL}/${data.seatId}`, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
          if (json.status === 'success' && json.data && json.data.seat) {
            dispatch(closeSeatDetails());
            return dispatch(deleteSeat(json.data.seat));
          }
          if (json.status === 'error' && json.error) {
            console.log(json.error);
          }
        }
      ).catch(err => console.log(err))
  }
}