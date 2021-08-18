import React,{useState,useEffect} from 'react'
import { A } from './A'
import axios from 'axios';
import myContext from './Context'

export const Post = () => {
    let[state, setState] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            setState(res.data)
        },(error)=>{
            alert("Error")
            console.log(error);
        })        
    }, [])

    return (
        <div>
            <h2>Post Component</h2>
            <myContext.Provider value={state}>
            <A />
            </myContext.Provider>
        </div>
    )
}
