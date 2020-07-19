import React, {useState ,useEffect} from 'react';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios';


export default () => {
    const [people, setPeople] = useState([]);
    const[loaded, setLoaded] = useState(false);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            })
    }, [])

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId));
    }

    return (
        <div>
            <PersonForm />
            <hr />
            {loaded && <PersonList people={people} removeFromDom={removeFromDom} />}
        </div>
    )
}