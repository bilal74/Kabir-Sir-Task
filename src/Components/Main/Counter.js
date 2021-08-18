import React,{useState} from 'react'
import './scss/style.css'

export const Counter = () => {

    var[count,setCount] = useState(0);

    return (
        <div>
            <h2>Clicked me : {count}</h2>
            <button onClick={()=>setCount(count+1)} class="btn btn-outline-warning">Click Me</button>
        </div>
    )
}
