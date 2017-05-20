import React from 'react';

/**
 * Takes in a star rating and renders an corresponding gif.
 * @param {Number} stars
 * @returns {JSX} 
 */
export default function Results(props) {
    let stars;
    let gif;
    switch (props.stars) {   
        case 1:
            gif = <p>"Captain cook"</p>;
            stars = <p>5 stars</p>;
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        default:
        break; 
    }
    return (
        <div>
            {gif}
            {stars}
        </div>
    );
}
