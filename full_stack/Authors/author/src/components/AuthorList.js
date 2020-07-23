import React, { useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from './DeleteButton'
import styles from './authors.module.css';

export default function AuthorList (props) {
    const {authors, setAuthors} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res=> setAuthors(res.data))
    }, [])


    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return(
        <div>
            <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>Author</th>
                            <th className={styles.th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {authors.map((author, index) => {
                        return <tr key={index} className={styles.tr}>
                            <td className={styles.td}>{author.name}</td>
                            <td className={styles.td, styles.center}><button onClick={()=>navigate("/edit/" + author._id )}>Edit</button> | <DeleteButton authorId={author._id} successCallBack={() => removeFromDom(author._id)} /></td>
                        </tr>
                    })}
                    </tbody>
                </table>
        </div>
    )
}