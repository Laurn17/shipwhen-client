
import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';
import {normalizeResponseErrors} from './utils';
import history from '../components/history';

const token = localStorage.getItem('authToken');


export const FETCH_BUS_REQUEST = 'FETCH_BUS_REQUEST';
export const fetchBusRequest = loading => ({
    type: FETCH_BUS_REQUEST,
    loading: true
});

export const FETCH_BUS_SUCCESS = 'FETCH_BUS_SUCCESS';
export const fetchBusSuccess = (reviews) => ({
    type: FETCH_BUS_SUCCESS,
    loading: false,
    noData: false,
    reviews
});

export const FETCH_BUS_ERROR = 'FETCH_BUS_ERROR';
export const fetchBusError = (error) => ({
    type: FETCH_BUS_ERROR,
    loading: false,
    error: "Something went wrong"
});

// TRYING TO HANDLE SERVER RESPONSE THAT IS EMPTY
export const FETCH_BUS_NODATA = 'FETCH_BUS_NODATA';
export const fetchBusNoData = (bus_name) => ({
    type: FETCH_BUS_NODATA,
    loading: false,
    noData: true,
    bus_name
});

// ---------------- GET THE BUSINESS'S REVIEWS FROM SERVER -------------- Used in components/landing-page
export const getBus = (bus_name) => dispatch => {
    dispatch(fetchBusRequest());
    return (
        fetch(`${API_BASE_URL}/reviews/${bus_name}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            contentType: 'application/json',
            dataType: 'json'
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if (res.length === 0) {
                console.log("No Business Found");
                dispatch(fetchBusNoData(`${bus_name}`))
                history.push("/no-business")
                .then(err => Promise.reject());
            }
            return res
        })
        .then(bus => {
            console.log("Found Business Successfully");
            console.log(bus);
            dispatch(fetchBusSuccess(bus))
            history.push(`/reviews/${bus_name}`);
        })
        .catch(err => {
             dispatch(fetchBusError());
        })
    );
};

// ---------------- POST THE A BUSINESS REVIEW TO SERVER -------------- Used in components/add-review
export const submitReview = (values, user) => dispatch => {
    values.user = user;
    return (
        fetch(`${API_BASE_URL}/reviews`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                },
                dataType: 'json'
            })
            .then(res => {
                return res.json();
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
                .then(res => {
                    console.log(res);
                })
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