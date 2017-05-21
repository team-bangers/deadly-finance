import React from 'react';
import FontAwesome from 'react-fontawesome';

/**
 * Takes in a star rating and renders an corresponding gif.
 * @param {Number} stars
 * @returns {JSX} 
 */
export default function Results(props) {
    const stars = 5;
    let starCount;
    let gif;
    switch (props.stars) {   
        case 1:
            gif = <p>"Captain cook"</p>;
            starCount = 1;
            break;
        case 2:
            gif = (
                <div>
                    <iframe src="https://giphy.com/embed/YaoEnNsrYoBKE" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    <p><a href="https://giphy.com/gifs/black-comedy-housewives-of-narromine-YaoEnNsrYoBKE">via GIPHY</a></p>
                </div>
            );
            starCount = 2;
            break;
        case 3:
            gif = <p>"Something"</p>
            starCount = 3;
            break;
        case 4:
            gif = <p>"Something"</p>
            starCount = 4;
            break;
        case 5:
            gif= (
                <div>
                    <iframe src="https://giphy.com/embed/tcCLArPer8L5u" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    <p><a href="https://giphy.com/gifs/cathy-freeman-winning-tcCLArPer8L5u">via GIPHY</a></p>
                </div>
            );
            starCount = 5;
            break;
        default:
        break; 
    }

    const starArr = [];

    for (let i = 0; i < stars; i++) {
        if (i < starCount) {
            starArr.push(<FontAwesome
                            name='star'
                            size='4x'
                            style={{color: 'yellow'}}
                        />);
        } else {
            starArr.push(<FontAwesome
                            name='star-o'
                            size='4x'
                            style={{color: 'yellow'}}
                        />);
        }
    }

    return (
        <div>
            {gif}
            {starArr.map(element => element)}
        </div>
    );
}
