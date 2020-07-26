import React, { useEffect, useState } from 'react';
import {Link, Router} from '@reach/router';
import Page1 from './Page1';
import Page2 from './Page2';
import axios from 'axios';

export default function Main (){
    const [players, setPlayers] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data)
            })
    }, [])
    
    return(
        <div>
        <p><Link to='/page1'>Page 1</Link> | <Link to='/page2'>Page 2</Link></p>
      <Router>
        {/* <Main path={'/'} /> */}
        <Page1 path={'/page1'} players={players} setPlayers={setPlayers} />
        <Page2 path={'/page2'} />
      </Router>

        </div>
    )
}