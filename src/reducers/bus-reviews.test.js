import busReviewsReducer from './bus-reviews';
import * as actions from '../actions/bus-reviews';

describe('busReviewsReducer', () => {
    // Set up some dummy data
    const sampleState = {
        bus_name: null,
        reviews: [],
        error: null,
        noData: null,
        loading: null
    }

    it('Should set the initial state when nothing is passed in', () => {
        const state = busReviewsReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(Object.assign({}, sampleState));
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = busReviewsReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toEqual({});
    });
});