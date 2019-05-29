import {API_BASE_URL} from '../config';

import {
    getBus,
    submitReview,
    FETCH_BUS_REQUEST,
    fetchBusRequest,
    FETCH_BUS_SUCCESS,
    fetchBusSuccess,
    FETCH_BUS_ERROR,
    fetchBusError,
    FETCH_BUS_NODATA,
    fetchBusNoData,
    FETCH_REVIEW_ERROR,
    fetchReviewError,
    FETCH_REVIEW_SUCCESS,
    fetchReviewSuccess,
} from './bus-reviews';


// TESTING GET REVIEWS ASYNC ACTION
describe('getBus', () => {
    it('Should dispatch fetchBusSuccess', () => {
        const reviews = {};

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return reviews;
                }
            })
        );

        const dispatch = jest.fn();
        return getBus()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/reviews/undefined`, {
            method: 'GET',
            contentType: 'application/json',
            dataType: 'json'
        });
            expect(dispatch).toHaveBeenCalledWith(fetchBusSuccess(reviews));
        });
    });
});


// TESTING SUBMIT REVIEW ASYNC ACTION
describe('submitReview', () => {
    it('Should dispatch fetchReviewSuccess()', () => {

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return reviews;
                }
            })
        );

        const values = {};
        const user = "Laurn17";
        const dispatch = jest.fn();
        return submitReview(values, user)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/reviews`, {
                method: 'POST',
                body: JSON.stringify(values, user),
                headers: {
                    'Content-Type': 'application/json'
                },
                dataType: 'json'
            });
            expect(dispatch).toHaveBeenCalledWith(fetchReviewSuccess());
        });
    });
});


