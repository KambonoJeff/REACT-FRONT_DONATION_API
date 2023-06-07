import React from 'react'
import Button from './Button'

const foodTable =( food ) => {
    return (
        <>        
            <h2 align='center'>Food Table</h2>
            <br/>   
                <table>
                <thead className="thead">             
                <tr>
                    <th>ID</th>
                    <th>cereals</th>
                    <th>proteins</th>
                    <th>legumes</th>
                    <th>breakfast</th>
                    <th>snacks</th>
                    <th>cash</th>
                    <th>other</th>
                </tr>     
            </thead>
                <tbody>
                    {
                        food.map((data, index)=>(
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.cereals}</td>
                                <td>{data.proteins}</td>
                                <td>{data.legumes}</td>
                                <td>{data.breakfast}</td>
                                <td>{data.snacks}</td>
                                <td>{data.cash}</td>
                                <td className='flex'>
                                    <Button text='Edit'/>
                                    <Button text='Del'/>
                                </td>
                            </tr>
                        ))
                    }
       
                </tbody> 
                </table>                    
        </>
   
    )
}
const userRecords =(users)=> {
    return(
        <>
            <br/> 
            <h2 align='center'>USERS table</h2>
            <br/>   
                <table>
            
                <thead className="thead">             
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>email</th>
                    <th>type</th>
                    <th>verifiedAT</th>
                    <th>other</th>
                </tr>     
                </thead>
                <tbody>
                    {
                        users.map((user, index)=>(
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.type}</td>
                                <td>{user.email_verified_at}</td>
                                <td className='flex'>
                                    <Button text='Edit'/>
                                    <Button text='Del'/>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
                </table>
        </>            
    )
}
const ngoRecords =( ngo )=> {
    return(
        <>
           
        <h2 align='center'>NGO table</h2>
        <br/>   
            <table>
        
            <thead className="thead">             
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>email</th>
                <th>location</th>
                <th>beneficiaries</th>
                <th>other</th>
            </tr>     
            </thead>
            <tbody>
                {
                    ngo.map((data, index)=>(
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.location}</td>
                            <td>{data.beneficiaries}</td>
                            <td className='flex'>
                                <Button text='Edit'/>
                                <Button text='Del'/>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
            </table>
    </>            
    )
}
// This returns the table

const Table = ({ food , state , users, ngo, requests }) => {
    return condition(state , food, users, ngo, requests)
}
export default Table


 const condition =(state , food, users, ngo, requests)=>{
     if(state === 'FOOD'){
         return foodTable(food);
     }
     else if(state === 'USERS'){
         return userRecords(users);
     }
     else if(state === 'NGO'){
         return ngoRecords(ngo);
     }
     else if(state === 'REQUESTS'){
         return requestsTable(requests);
     }
     else{
         return (
             <div className="empty">
                 <br/>
                 <br/>
                 <br/>
                 <h1 align='center'>nothing to show</h1>
             </div>
         );
    
     }
 }
            

     const requestsTable =( requests )=> {
                 return(
             <>
                      </>            
         )
     }   

