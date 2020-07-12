import React from 'react';
import styles from './Boxes.module.css';

const Boxes = props => {
 const {boxes} = props

    return(
        <>
            <div className={styles.fancy}>
                {boxes.map((box, idx) => (
                    <div className={styles.box} key={idx}>{box}<br/></div>
                ))}
            </div>
        </>
    )

}

export default Boxes;