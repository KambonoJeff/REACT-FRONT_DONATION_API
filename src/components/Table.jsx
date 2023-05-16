import React from 'react'
import Button from './Button'

// users, ngo, requests, food,math,state

const Table = ({ food  }) => {
    return (
        <>        
           <br/>            
           <br/> 
           <h2 align='center'>Food table</h2>
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
export default Table
  
    // const userRecords =()=> {
    //     return(
    //         <>
    //         <br/>   
    //         <div className="flex">
    //         <Button text={math[0]}/>    
    //         <Button text={math[1]}/>    
    //         <Button text={math[2]}/>    
    //         <Button text={math[3]}/>    
    //         <Button text={math[4]}/>    
    //         <Button text={math[5]}/>    
               
    //     </div>    
    //     <br/> 
    //     <h2 align='center'>USERS table</h2>
    //     <br/>   
    //         <table>
            
    //         <thead className="thead">             
    //         <tr>
    //             <th>ID</th>
    //             <th>name</th>
    //             <th>email</th>
    //             <th>type</th>
    //             <th>verifiedAT</th>
    //             <th>other</th>
    //         </tr>     
    //         </thead>
    //         <tbody>
    //             {
    //                 users.map((user, index)=>(
    //                     <tr key={index}>
    //                         <td>{user.id}</td>
    //                         <td>{user.name}</td>
    //                         <td>{user.email}</td>
    //                         <td>{user.type}</td>
    //                         <td>{user.email_verified_at}</td>
    //                         <td className='flex'>
    //                             <Button text='Edit'/>
    //                             <Button text='Del'/>
    //                         </td>
    //                     </tr>
    //                 ))
    //             }
     
    //         </tbody>
    //         </table>
    //     </>            
    //     )
    // }
    // const ngoRecords =()=> {
    //     return(
    //         <>
    //         <br/>   
    //         <div className="flex">
    //         <Button text={math[0]}/>    
    //         <Button text={math[1]}/>    
               
               
    //     </div>    
    //     <br/> 
    //     <h2 align='center'>NGO table</h2>
    //     <br/>   
    //         <table>
            
    //         <thead className="thead">             
    //         <tr>
    //             <th>ID</th>
    //             <th>name</th>
    //             <th>email</th>
    //             <th>location</th>
    //             <th>beneficiaries</th>
    //             <th>other</th>
    //         </tr>     
    //         </thead>
    //         <tbody>
    //             {
    //                 ngo.map((data, index)=>(
    //                     <tr key={index}>
    //                         <td>{data.id}</td>
    //                         <td>{data.name}</td>
    //                         <td>{data.email}</td>
    //                         <td>{data.location}</td>
    //                         <td>{data.beneficiaries}</td>
    //                         <td className='flex'>
    //                             <Button text='Edit'/>
    //                             <Button text='Del'/>
    //                         </td>
    //                     </tr>
    //                 ))
    //             }
     
    //         </tbody>
    //         </table>
    //     </>            
    //     )
    // }
    // const foodTable =()=> {
    //     return(
    //         <>

    //         console.log({food})


    //         {/* <br/>   
    //           
               
    //     <br/> 
    //     <h2 align='center'>Food table</h2>
    //     <br/>   
    //         <table>
    //         <thead className="thead">             
    //         <tr>
    //             <th>ID</th>
    //             <th>cereals</th>
    //             <th>proteins</th>
    //             <th>legumes</th>
    //             <th>breakfast</th>
    //             <th>snacks</th>
    //             <th>cash</th>
    //             <th>other</th>
    //         </tr>     
    //         </thead>
    //         <tbody>
    //             {
    //                 food.map((data, index)=>(
    //                     <tr key={index}>
    //                         <td>{data.id}</td>
    //                         <td>{data.cereals}</td>
    //                         <td>{data.proteins}</td>
    //                         <td>{data.legumes}</td>
    //                         <td>{data.breakfast}</td>
    //                         <td>{data.snacks}</td>
    //                         <td>{data.cash}</td>
    //                         <td className='flex'>
    //                             <Button text='Edit'/>
    //                             <Button text='Del'/>
    //                         </td>
    //                     </tr>
    //                 ))
    //             }
     
    //         </tbody>
    //         </table> */}
    //     </>            
    //     )
    // }
    // const requestsTable =()=> {
    //     const getRowStyle=(value)=>{
    //         if(value === 'NotApproved' ){
    //             return {
    //                 borderLeft:'5px solid red',
    //                 borderRadius:'10px',
    //                 color:'red',
    //                 fontWeight:'bold',
    //                 borderRight:'5px solid red'
    //             };
    //         }else if(value ==='Pending'){
    //             return {
    //                 borderLeft:'5px solid orange',
    //                 borderRadius:'10px',
    //                 color:'orange',
    //                 fontWeight:'bold',
    //                 borderRight:'5px solid orange'
    //             };
    //         }
    //         else if (value ==='Approved'){
    //             return {
    //                 borderLeft:'5px solid green',
    //                 borderRadius:'10px',
    //                 color:'green',
    //                 fontWeight:'bold',
    //                 borderRight:'5px solid green'
    //             };
    //         }
    //     }
    //     return(
    //         <>
    //         <br/>   
              
    //     <br/> 
    //     <h2 align='center'>Requests table</h2>
    //     <br/>   
    //         <table>
            
    //         <thead className="thead">             
    //         <tr>
    //             <th>ID</th>
    //             <th>user_id</th>
    //             <th>typeoffood</th>
    //             <th>quantity</th>
    //             <th>beneficiaries</th>
    //             <th>location</th>
    //             <th>status</th>
    //             <th>other</th>
    //         </tr>     
    //         </thead>
    //         <tbody>
    //             {
    //                 requests.map((data, index)=>(
    //                     <tr key={index}>
    //                         <td>{data.id}</td>
    //                         <td>{data.user_id}</td>
    //                         <td>{data.typeoffood}</td>
    //                         <td>{data.quantity}</td>
    //                         <td>{data.beneficiaries}</td>
    //                         <td>{data.location}</td>
    //                         <td style={getRowStyle((data.status))}>{data.status}</td>
    //                         <td className='flex'>
    //                             <Button text='Edit'/>
    //                             <Button text='Del'/>
    //                         </td>
    //                     </tr>
    //                 ))
    //             }
     
    //         </tbody>
    //         </table>
    //     </>            
    //     )
    // }   
    // const condition =()=>{
    //     if(state === 'foodie'){
    //         return foodTable();
    //     }
    //     else if(state === 'userss'){
    //         return userRecords();
    //     }
    //     else if(state === 'ngoset'){
    //         return ngoRecords();
    //     }
    //     else if(state === 'setrequests'){
    //         return requestsTable();
    //     }
    //     else{
    //         return (
    //             <div className="empty">
    //                 <br/>
    //                 <br/>
    //                 <br/>
    //                 <h1 align='center'>nothing to show</h1>
    //             </div>
    //         );
            
    //     }
    // }
