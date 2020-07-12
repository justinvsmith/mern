import React, {useState} from 'react';

const BForm = props => {
    const [color, setColor] = useState("");
    const [dimension, setDimension] = useState("")
    const {boxes, setBoxes} = props


    function box(dim,str){
        return(
        <div style={{
            width: dim,
            height: dim,
            backgroundColor: str 
        }}></div>
        )
    }


    const submitAction = (e) => {
        e.preventDefault();
        setBoxes([
            ...boxes,
            box(Number(dimension),color)
        ])
        setColor("");
        setDimension("");
    }


    return (
        <div>
            <form onSubmit={submitAction}>
                <div>
                    <label htmlFor="color">Color</label>
                    <input type="text" onChange={(e) => setColor(e.target.value)} value={color} />
                </div>
                <div>
                    <label htmlFor="dimension">Dimension</label>
                    <input type="number" onChange={(e) => setDimension(e.target.value)} value={dimension} />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};



export default BForm;