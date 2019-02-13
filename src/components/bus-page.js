import React from 'react';
import {connect} from 'react-redux';

import AddReview from './add-review';

import {addReview, getBus} from '../actions';

import './bus-page.css';

export class BusPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(getBus());
    }
