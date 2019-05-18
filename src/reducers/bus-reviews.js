
import * as actions from '../actions/bus-reviews';

const initialState = {
    bus_name: null,
    reviews: [],
    error: null,
    noData: null,
    loading: null
};

export default function busReviewsReducer(state=initialState, action) {
    if (action.type === actions.FETCH_BUS_REQUEST) {
        return { ...state,
            loading: true,
            error: null
        }
    }
    if (action.type === actions.FETCH_BUS_ERROR) {
        return Object.assign({}, state, {
            reviews: [null],
            error: action.error
        })
    }
    if (action.type === actions.FETCH_BUS_NODATA) {
        return Object.assign({}, state, {
            bus_name: action.bus_name,
            loading: action.loading,
            noData: action.noData
        })
    }
    else if (action.type === actions.FETCH_BUS_SUCCESS) {
        return Object.assign({}, state, {
            reviews: action.reviews,
            loading: action.loading
        })
    }
    return state;
};