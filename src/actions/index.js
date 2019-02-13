import {API_BASE_URL} from '../config';

export const ADD_LIST = 'ADD_LIST';
export const addList = title => ({
    type: ADD_LIST,
    title
});

export const ADD_CARD = 'ADD_CARD';
export const addCard = (text, listIndex) => ({
    type: ADD_CARD,
    text,
    listIndex
});

export const FETCH_BUS_REQUEST = 'FETCH_BUS_REQUEST';
export const fetchBusRequest = bus => ({
    type: FETCH_BUS_REQUEST,
    business
});

export const FETCH_BUS_SUCCESS = 'FETCH_BUS_SUCCESS';
export const fetchBusSuccess = bus => ({
    type: FETCH_BUS_SUCCESS,
    business
});

export const FETCH_BUS_ERROR = 'FETCH_BUS_ERROR';
export const fetchBusERROR = bus => ({
    type: FETCH_BUS_ERROR,
    business
});

export const getBus = () => dispatch => {
    dispatch(fetchBusRequest());
    fetch(`${API_BASE_URL}/board`)
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

};