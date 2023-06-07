import React from 'react'

const Requests = (requests) => {
    const getRowStyle=(value)=>{
        if(value === 'NotApproved' ){
            return {
                borderLeft:'5px solid red',
                borderRadius:'10px',
                color:'red',
                fontWeight:'bold',
                borderRight:'5px solid red'
            };
        }else if(value ==='Pending'){
            return {
                borderLeft:'5px solid orange',
                borderRadius:'10px',
                color:'orange',
                fontWeight:'bold',
                borderRight:'5px solid orange'
            };
        }
        else if (value ==='Approved'){
            return {
                borderLeft:'5px solid green',
                borderRadius:'10px',
                color:'green',
                fontWeight:'bold',
                borderRight:'5px solid green'
            };
        }
    }

  return (
    <>
      <br/>   
              
              <br/> 
              <h2 align='center'>Requests table</h2>
              <br/>   
                  <table>
                 
                  <thead className="thead">             
                  <tr>
                      <th>ID</th>
                      <th>user_id</th>
                      <th>typeoffood</th>
                      <th>quantity</th>
                      <th>beneficiaries</th>
                      <th>location</th>
                      <th>status</th>
                      <th>other</th>
                  </tr>     
                  </thead>
                  <tbody>
                      {
                          requests.map((data, index)=>(
                              <tr key={index}>
                                  <td>{data.id}</td>
                                  <td>{data.user_id}</td>
                                  <td>{data.typeoffood}</td>
                                  <td>{data.quantity}</td>
                                  <td>{data.beneficiaries}</td>
                                  <td>{data.location}</td>
                                  <td style={getRowStyle((data.status))}>{data.status}</td>
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

export default Requests
