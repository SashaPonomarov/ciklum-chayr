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

        case seatsTypes.OPEN_SEAT_DETAILS:
            let currentSeat = state.seats.find((seat) => {
                return seat.seatId === action.seatId;
            })
            return Object.assign({}, state, {
                currentSeat,
                showSeatDetails: true
            })

        case seatsTypes.CLOSE_SEAT_DETAILS:
            return Object.assign({}, state, {
                currentSeat: '',
                showSeatDetails: false
            })


        default:
            return state;
    }
};
