import React,{useContext} from 'react'
import myContext from './Context'

export const D = () => {

    const myContextData = useContext(myContext)
    console.log(myContextData);

    return (
        <div className="container">
        {console.log(myContextData)}
        {
            myContextData.map((value1,index)=>{
                return <h2>{value1.id}</h2>
            })
        }
        
            {/* <div className="row">
            {
                myContextData.map((value1,index)=>{
                    return <h2>{value1.id}</h2>
                })
            }

            </div> */}
            <h2>D Component</h2>
            
        </div>
    )
}
