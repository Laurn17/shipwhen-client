// import {busReviewsReducer} from './bus-reviews';
// import * as actions from '../actions/bus-reviews';

// describe('busReviewsReducer', () => {
//     // Set up some dummy data
//     const bus_name = 'Amazon';


//     it('Should set the initial state when nothing is passed in', () => {
//         const state = busReviewsReducer(undefined, {type: '__UNKNOWN'});
//         expect(state).toEqual({
//             bus_name: null,
//             reviews: [],
//             error: null,
//             submitSucceeded: null,
//             noData: null,
//             loading: null
//         });
//     });

//     it('Should return the current state on an unknown action', () => {
//         let currentState = {};
//         const state = busReviewsReducer(currentState, {type: '__UNKNOWN'});
//         expect(state).toBe(currentState);
//     });
// });