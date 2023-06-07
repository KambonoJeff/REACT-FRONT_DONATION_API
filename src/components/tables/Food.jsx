import React from 'react'

const Food = (food) => {
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

export default Food
