import { FETCH_WEATHER } from '../actions/ActionType';
export const forecastReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return [...state, action.payload.data];
        default:
            return state;
    }

}