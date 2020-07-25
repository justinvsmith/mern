import React, {useState} from 'react';
import PlayerList from './PlayerList';
import styles from '../components/tmanager.module.css'

export default function PlayerManagement ({pages}) {
const [activeIndex, setActiveIndex] = useState(0);
    


return (
        <div>
            <ul className={styles.list} >
                {pages.map((page, index) => {
                    return <li key={index} onClick={() => setActiveIndex(index)}>
                        <Link to{page.name}
                    </li>
                })}
            </ul>
            <div  className={styles.border}>
                {pages[activeIndex].content}
            </div>
        </div>
    )
}