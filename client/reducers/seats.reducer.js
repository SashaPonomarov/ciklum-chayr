import seatsTypes from '../actions/types/seats.types';

export default (state = {}, action) => {
    switch (action.type) {
        case seatsTypes.RECEIVE_SEATS:
            return Object.assign({}, state, {
                seats: action.seats,
            })

        case seatsTypes.ADD_SEAT:
            return Object.assign({}, state, {
                seats: [...state.seats, action.seat]
            })

        case seatsTypes.UPDATE_SEAT:
            {let index = state.seats.findIndex((seat) => {
                return seat.seatId === action.seat.seatId;
            })
            return Object.assign({}, state, {
                seats: [
                    ...state.seats.slice(0, index),
                    action.seat,
                    ...state.seats.slice(index + 1),
                ]
            })}

        case seatsTypes.DELETE_SEAT:
            {let index = state.seats.findIndex((seat) => {
                return seat.seatId === action.seat.seatId;
            })
            return Object.assign({}, state, {
                seats: [
                    ...state.seats.slice(0, index),
                    ...state.seats.slice(index + 1)
                ]
            })}

        case seatsTypes.OPEN_SEAT_DETAILS:
            {let currentSeat = state.seats.find((seat) => {
                return seat.seatId === action.seatId;
            })
            return Object.assign({}, state, {
                currentSeat,
                showSeatDetails: true
            })}

        case seatsTypes.CLOSE_SEAT_DETAILS:
            return Object.assign({}, state, {
                currentSeat: '',
                showSeatDetails: false
            })


        default:
            return state;
    }
};
