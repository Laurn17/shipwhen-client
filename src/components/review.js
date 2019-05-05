import React from 'react';

// import './review.css';

export default function Review(props) {
    return (
        <div className="review">
            {props.text}
        </div>
    );
};

// Card.defaultProps = {
//     text: ''
// };