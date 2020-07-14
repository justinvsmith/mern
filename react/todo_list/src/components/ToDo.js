import React, {useState, useEffect} from 'react';
import styles from './ToDo.module.css';


export default function ToDo() {
    const [todos, setTodos] = useState([]);
    const [item, setItem] = useState("");
    const [checked, setChecked] = useState(false); 

    // useEffect(() => {
    //     const data = localStorage.getItem("my-todos");
    //     if(data){
    //         setTodos(JSON.parse.data);
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("my-todos", JSON.stringify(todos));
    // }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const todo = item

        setTodos([
            ...todos,
            todo
        ])

        setItem("");

        console.log(...todos);
    }

    function deleted(index){
        setTodos(
        todos.filter((todos, idx) => idx !== index)
        );
    }

    function faded(event){
        const checkbox = event.target;
        const checkboxSib = checkbox.parentElement.previousSibling;

        if(checkbox.checked === true){
            setChecked(true);
            checkboxSib.classList.add(styles.strike);
        } else if(checkbox.checked === false){
            setChecked(false);
            checkboxSib.classList.remove(styles.strike);
        }

    }
    
    
    return(
        <div>
            <p>{item}</p>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setItem(e.target.value)}  value={item} />
                <input type="submit" value="Add" />
            </form>
                <div>
                    {todos.map((biscuit, idx) => 
                        <table key={idx}>
                            <tbody>
                                <tr>
                                    <td>{biscuit}</td>
                                    <td><input className="checks" type="checkbox" onClick={faded}></input></td>
                                    <td><button className={idx} onClick={() => deleted(idx)}>Delete</button></td>
                                </tr>
                            </tbody>
                        </table>)}
                </div>
        </div>
    )
}