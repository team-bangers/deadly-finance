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
            gif = (
                <div>
                    <iframe src="https://giphy.com/embed/5xlLHPGAP8gdG" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                    <p><a href="https://giphy.com/gifs/capatain-cook-1770-invasion-5xlLHPGAP8gdG">via GIPHY</a></p>
                </div>
            );
            starCount = 1;
            break;
        case 2:
            gif = (
                <div>
                    <iframe src="https://giphy.com/embed/GC4KDjKpCvFNS" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                    <p><a href="https://giphy.com/gifs/john-howard-GC4KDjKpCvFNS">via GIPHY</a></p>
                </div>
            );
            starCount = 2;
            break;
        case 3:
            gif = (
                <div>
                    <img src="https://media.giphy.com/media/YaoEnNsrYoBKE/giphy.gif" alt="housewives-of-narromine" width="480" height="264" />
                </div>
            );
            starCount = 3;
            break;
        case 4:
            gif = (
                <div>
                    <iframe src="https://giphy.com/embed/RCDSPp9H4EBFu" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                    <p><a href="https://giphy.com/gifs/jt-johnathan-thurston-goal-nrl-RCDSPp9H4EBFu">via GIPHY</a></p>  
                </div>
            );
            starCount = 4;
            break;
        case 5:
            gif= (
                <div>
                    <iframe src="https://giphy.com/embed/tcCLArPer8L5u" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
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
                            key={i}
                        />);
        } else {
            starArr.push(<FontAwesome
                            name='star-o'
                            size='4x'
                            style={{color: 'yellow'}}
                            key={i}
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
