import React from 'react';

const Word = (props) => {

const urlVariable = props.word;

    if(isNaN(urlVariable)){
    return (
        <div>
            <h1>The word is: {urlVariable}</h1>
        </div>
    )
    } else {
        return (
            <div>
                <h1>The number is: {urlVariable}</h1>
            </div>
        )
    }
}
 
export default Word;