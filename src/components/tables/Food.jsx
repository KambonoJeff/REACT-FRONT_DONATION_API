import React, { useState,useEffect } from 'react'
import axiosClient from '../../axios-client';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';


const Food = () => {
  const{type}=useStateContext();
  const[foods ,setFood]=useState([]);
  const [sum,setSum]=useState([])
  const [load, setLoad] = useState();
  let navigate = useNavigate();
  const food =()=>{
    axiosClient.get('/food').then((res)=>{
      setLoad(false)
      setFood(res.data[6].data)
      setSum(res.data)

    })
      .catch(err =>{ setLoad(false); console.error(err)});
   }
   useEffect(()=>{
    setLoad(true)
    food()
   },[])

   const onDelete =(data)=>{
      console.log(data)
      if(type!=='admin'){
        window.alert('ONLY ADMIN CAN DELETE!')
      }else{
        if(!window.confirm('Are you sure you want to delete this record?')){
          return
        }else{
          setLoad(true)
          axiosClient.delete(`/food/delete/${data.id}`)
          .then(({data})=>{
            setLoad(false);
          })
          .catch((err)=>{
            setLoad(false);
            console.log('An error occured when making the request', err)
          })

        }
      }
   }
  return (
    <>
                  <h2 align='center'>Food Table and Totals</h2>
            {type!=='admin'&&
            <Link className='btn-green' to={'/form/NgoRequest'}> Donate </Link>
            }
            
            <div className="grid mg-t">

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
                    <th>Other</th>
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
                                <td className='flex'>
                                  <Link className='btn' to={'/food/'+ data.id}> Edit </Link>
                                  <button className='btn' onClick={event=>{onDelete(data)}}> Delete </button>
                                </td>
                                                
                                        
                                
                                        
                            </tr>
                        ))
                    }
       
                </tbody> 
                </table>  
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <div className="flex box">

                <div class="card3 card3-grid ">
         <div class="amount">Kgs {sum[0]}</div> 
        <div class="title"> Cereals </div>
    </div>

    <div class="card3 card3-grid ">
         <div class="amount">Kgs {sum[1]}</div> 
        <div class="title"> Proteins </div>
    </div>
    <div class="card3 card3-grid ">
         <div class="amount">Kgs {sum[2]}</div> 
        <div class="title"> Legumes </div>
    </div>
    <div class="card3 card3-grid ">
         <div class="amount">Kgs {sum[3]}</div> 
        <div class="title"> Breakfast </div>
    </div>
    <div class="card3 card3-grid ">
         <div class="amount">Kgs {sum[4]}</div> 
        <div class="title"> Snacks </div>
    </div>
    <div class="card3 card3-grid ">
         <div class="amount">${sum[5]}</div> 
        <div class="title"> Cash </div>
    </div> 
                </div>
                </div>

                <button className='btn' onClick={()=>navigate(-1)}>Back</button>                  
    </>
  )
}

export default Food
