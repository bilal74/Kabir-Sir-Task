import React,{useState, useEffect} from 'react'
import axios from 'axios';

export const User = () => {
    const [user,setUser] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setUser(res.data)
        },(errorMsg)=>{
            alert("Error");
        })
    }, [])

    return (
        <div className="container">
            <h2>API Users</h2>
            <div className="row">
                <div className="col">
                    {
                        user.length > 0? <table className="table mt-3 table-hover">
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Email</th>
                            </tr>
                            {
                                user.map(function(data,index){
                                    return <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.address.city}</td>
                                        <td>{data.email}</td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table> : <h2>Data not available</h2>
                    }
                </div>    
            </div>

        </div>
    )
}
