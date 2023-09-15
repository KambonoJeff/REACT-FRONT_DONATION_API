import React, { useState,useEffect } from 'react'
import axiosClient from '../../axios-client';
import { Link, useNavigate } from 'react-router-dom';


const Food = () => {
  const[foods ,setFood]=useState([]);
  const [sum,setSum]=useState([])
  const [load, setLoad] = useState()
  let navigate = useNavigate();
  const food =()=>{
    axiosClient.get('/food').then((res)=>{
      setLoad(false)
      console.log(res.data);
      setFood(res.data[6].data)
      setSum(res.data)
      console.log('This the sum',sum[0])

    })
      .catch(err =>{ setLoad(false); console.error(err)});
   }
   useEffect(()=>{
    setLoad(true)
    food()
   },[])
  return (
    <>
                  <h2 align='center'>Food Table and Totals</h2>
            <br/>   
            <Link className='btn-green' to={'/form/NgoRequest'}> Donate </Link>
            <br />
            <div className="flex mg-t">

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
                </tr>     
            </thead>
            {load &&<tbody>
              <tr>
                <td colSpan='8' align='center'><h3>Loading . . . .</h3></td>
              </tr>
            </tbody>}
                <tbody>
                    {
                        foods.map((data, index)=>(
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.cereals} kg</td>
                                <td>{data.proteins} kg</td>
                                <td>{data.legumes} kg</td>
                                <td>{data.breakfast} kg</td>
                                <td>{data.snacks} kg</td>
                                <td>{data.cash} kshs</td>
                                                
                                        
                                
                                        
                            </tr>
                        ))
                    }
       
                </tbody> 
                </table>  
                <br />

                <div className="grid box">

 <div className="flex box">cereals <div className="btn">{sum[0] } kgs</div></div> 

 <div className="flex box">proteins <div className="btn">{sum[1] } kgs</div></div>
<div className="flex box">legumes <div className="btn">{sum[2] } kgs</div></div>
<div className="flex box">Breakfast <div className="btn">{sum[3] } kgs</div></div>
<div className="flex box">Snacks <div className="btn">{sum[4] } kgs</div></div>
<div className="flex box">Cash <div className="btn">{sum[5] } kshs</div></div> 
                </div>
                </div>

                <button className='btn' onClick={()=>navigate(-1)}>Back</button>                  
    </>
  )
}

export default Food
