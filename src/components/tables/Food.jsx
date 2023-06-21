import React, { useState,useEffect } from 'react'
import axiosClient from '../../axios-client';
import { Link, useNavigate } from 'react-router-dom';


const Food = () => {
  const[foods ,setFood]=useState([]);
  const [load, setLoad] = useState()
  let navigate = useNavigate();
  const food =()=>{
    axiosClient.get('/food').then((res)=>{
      setLoad(false)
      console.log(res);
      setFood(res.data.data)})
      .catch(err =>{ setLoad(false); console.error(err)});
   }
   useEffect(()=>{
    setLoad(true)
    food()
   },[])
  return (
    <>
                  <h2 align='center'>Food Table</h2>
            <br/>   
            <Link className='btn-green' to={'/food/new'}>Donate</Link>
            <br />
            <br />
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
            {load &&<tbody>
              <tr>
                <td colSpan='8' align='center'><h3>Loading . . .</h3></td>
              </tr>
            </tbody>}
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
                                        <Link className='btn' to={'/food/'+data.id}>Edit</Link>
                                    </td>
                                
                               
                                        
                                
                                        
                            </tr>
                        ))
                    }
       
                </tbody> 
                </table>  
                <br />

                <button className='btn' onClick={()=>navigate(-1)}>Back</button>                  
    </>
  )
}

export default Food
