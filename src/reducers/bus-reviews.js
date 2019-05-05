
import * as actions from '../actions/bus-reviews';

    // loading: false,
    // error: null,
    // bus_name: [1],
    //   reviews: [{
    //       id: 2,
    //       date_created: "20190115",
    //       bus_name: "Petes",
    //       delivery: "Free",
    //       order_date: "20190101",
    //       estimate_date:"20190105",
    //       arrive: true,
    //       arrive_date: "20190101",
    //       created_by: 4
    //     },
    //     {
    //       id: 2,
    //       date_created: "20190116",
    //       bus_name: "Lucky",
    //       delivery: "Free",
    //       order_date:"20190110",
    //       estimate_date:"20190115",
    //       arrive: true,
    //       arrive_date: "20190115",
    //       created_by: 4
    //     }],
    //   review_creators: {
    //     4: {
    //       id: 4,
    //       username: 'thierry',
    //     },
    //     5: {
    //       id: 5,
    //       username: 'dennis'
    //     }
    // }

const initialState = {
  bus_name: null,
  reviews: [{
    id: null,
    bus_name: null,
    delivery: null,
    order_date: null,
    estimate_date: null,
    arrive: null,
    arrive_date: null,
    created_by: null
  }],
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