import React, { useState,useEffect } from 'react'
import Button from '../Button'
import axiosClient from '../../axios-client';
import { Link } from 'react-router-dom';
const Food = () => {
  const[foods ,setFood]=useState([]);
  const food =()=>{
    axiosClient.get('/food').then((res)=>{
      setFood(res.data.data)})
      .catch(err => console.error(err));
   }
   useEffect(()=>{
    food()
   },[])
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
                        foods.map((data, index)=>(
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.cereals}</td>
                                <td>{data.proteins}</td>
                                <td>{data.legumes}</td>
                                <td>{data.breakfast}</td>
                                <td>{data.snacks}</td>
                                <td>{data.cash}</td>
                                <td className='flex'>
                                    <Link className='btn' to={'/users/'+data.id}>Edit</Link>
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
