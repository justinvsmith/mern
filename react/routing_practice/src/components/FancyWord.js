import React from 'react';

const FancyWord = (props) => {
  
    
    return(
        <div>
            <p style={{
                color: props.color,
                backgroundColor: props.background,
                padding: 25,
                fontSize: 26
            }}>The word is: {props.word}</p>
        </div>
    )
}

export default FancyWord;