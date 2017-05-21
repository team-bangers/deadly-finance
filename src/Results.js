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
                <img src="https://media.giphy.com/media/5xlLHPGAP8gdG/giphy.gif" width="480" height="270" alt="captain-cooks-coming" />
            );
            starCount = 1;
            break;
        case 2:
            gif = (
                <img src="https://media.giphy.com/media/13f8ewFYhDugN2/giphy.gif" width="480" height="360" alt="bush-mechanics" />
            );
            starCount = 2;
            break;
        case 3:
            gif = (
                <img src="https://media.giphy.com/media/YaoEnNsrYoBKE/giphy.gif" alt="housewives-of-narromine" width="480" height="264" />
            );
            starCount = 3;
            break;
        case 4:
            gif = (
                <img src="https://media.giphy.com/media/RCDSPp9H4EBFu/giphy.gif" width="480" height="270" alt="johnathan-thurston-kicking-goal" /> 
            );
            starCount = 4;
            break;
        case 5:
            gif= (
                <img src="https://media.giphy.com/media/tcCLArPer8L5u/giphy.gif" width="480" height="360" alt="cathy-freeman-winning" />
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
            <div className='inappropriate-gif'>
                {gif}
            </div>
            <div className='stars'>
                {starArr.map(element => element)}
            </div>
        </div>
    );
}
