import React from 'react'
import '../scss/style.css'

export const Card1 = (props) => {
    return (
        <div className="container">
            <div className={props.classMed}>

            
            <div className="card1">
                <div className="left">
                 {/* <h1>Card</h1> */}
                 <img src={props.imgLink} alt="img" />
                </div>

                <div className="right">
                     {/* <h1>Card</h1> */}
                     <h1>{props.name}</h1>
                     <p>{props.data}</p>
                </div>
                </div>
            </div>
        </div>
    )
}
