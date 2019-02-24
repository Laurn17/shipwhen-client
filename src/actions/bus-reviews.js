import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';
import {normalizeResponseErrors} from './utils';



export const FETCH_BUS_REQUEST = 'FETCH_BUS_REQUEST';
export const fetchBusRequest = loading => ({
    type: FETCH_BUS_REQUEST,
    loading: true
});

export const FETCH_BUS_SUCCESS = 'FETCH_BUS_SUCCESS';
export const fetchBusSuccess = (reviews) => ({
    type: FETCH_BUS_SUCCESS,
    payload: {
        reviews
    }
});

export const FETCH_BUS_ERROR = 'FETCH_BUS_ERROR';
export const fetchBusError = (error) => ({
    type: FETCH_BUS_ERROR,
    error
});

// ---------------- GET THE BUSINESS'S REVIEWS FROM SERVER -------------- Used in components/landing-page
export const getBus = () => dispatch => {
    dispatch(fetchBusRequest());
    return
        fetch(`${API_BASE_URL}/:busName`, {
            method: 'GET'
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(bus => {
            dispatch(fetchBusSuccess(bus));
        })
        .catch(err => {
             dispatch(fetchBusError());
        });
};

// ---------------- POST THE A BUSINESS REVIEW TO SERVER -------------- Used in components/add-review
export const submitReview = (values) => dispatch => {
    return (
        fetch(`{API_BASE_URL}/:busName`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if (!res.ok) {
                        if (
                            res.headers.has('content-type') &&
                            res.headers
                                .get('content-type')
                                .startsWith('application/json')
                        ) {
                            // It's a nice JSON error returned by us, so decode it
                            return res.json().then(err => Promise.reject(err));
                        }
                        // It's a less informative error returned by express
                        return Promise.reject({
                            code: res.status,
                            message: res.statusText
                        });
                    }
                    return;
                })
                .then(() => console.log('Submitted with values', values))
                .catch(err => {
                    const {reason, message, location} = err;
                    if (reason === 'ValidationError') {
                        // Convert ValidationErrors into SubmissionErrors for Redux Form
                        return Promise.reject(
                            new SubmissionError({
                                [location]: message
                            })
                        );
                    }
                    return Promise.reject(
                        new SubmissionError({
                            _error: 'Error submitting message'
                        })
                    );
                })
    );
};