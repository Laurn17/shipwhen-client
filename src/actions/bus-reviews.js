import {API_BASE_URL} from '../config';

export const SUBMIT_REVIEW = 'SUBMIT_REVIEW';
export const submitReview = (busName, delivery, odate, edate, arrive, adate) => ({
    type: ADD_REVIEW,
    id,
    date_created,
    busName,
    delivery,
    order_date,
    estimate_date,
    arrive,
    arrive_date,
});


export const FETCH_BUS_REQUEST = 'FETCH_BUS_REQUEST';
export const fetchBusRequest = bus => ({
    type: FETCH_BUS_REQUEST,
    business
});

export const FETCH_BUS_SUCCESS = 'FETCH_BUS_SUCCESS';
export const fetchBusSuccess = bus => ({
    type: FETCH_BUS_SUCCESS,
    busName
});

export const FETCH_BUS_ERROR = 'FETCH_BUS_ERROR';
export const fetchBusERROR = bus => ({
    type: FETCH_BUS_ERROR,
    busError
});

export const getBus = () => dispatch => {
    dispatch(fetchBusRequest());
    // fetch(`${API_BASE_URL}/:busName`, {
    //     method: 'GET',
    //     )
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(bus => {
            dispatch(fetchBoardSuccess(bus));
        })
        .catch(err => {
            dispactch(fetchBusERROR());
        });
        }
};

export const submitReview = () => dispatch => {
    fetch(`{API_BASE_URL}/"busName`, {
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
            });
    }
}