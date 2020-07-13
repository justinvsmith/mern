import React, {useState} from 'react';

export default function Tab(items){

const clickAction = (i, c) => {
    items.setItems({
        ...items,
        item: i, content: c
    })

}

    return(
    <div>
        <button onClick={() => clickAction("Tab 1", "Content for tab 1")}>Tab 1</button>
        <button onClick={() => clickAction("Tab 2", "Content for tab 2")}>Tab 2</button>
        <button onClick={() => clickAction("Tab 3", "Content for tab 3")}>Tab 3</button>
        {/* <ul> 
            {items.items.map((item, idx) => {
                return <button key={idx} onClick={clickAction}>{items. items[idx].item}</button>
                
            })}
        </ul>
        <p>{items.items[0].content}</p> */}
        <p>{items.items.content}</p>
    </div>
    )
    
//     const [tabs, setTabs] = useState('Tab 1');
//     const [content, setContent] = useState('This is the content for Tab 1');
    
//     function clicked(r,c){
//         setTabs(r);
//         setContent(c);
//     }
    
//     return(
//         <div>
//     <button onClick={() => clicked('Tab 1', 'This is the content for Tab 1')}>Tab 1</button>
//     <button onClick={() => clicked('Tab 2', 'This is content showing for Tab 2')}>Tab 2</button>
//     <button onClick={() => clicked('Tab 3 ', 'Tab 3 has very little content')}>Tab 3</button>
//     <p>{content}</p>
//     </div>
// )
}

