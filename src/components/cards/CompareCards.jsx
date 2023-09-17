import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import { useNavigate } from 'react-router-dom';

const CompareCards = () => {
    const [food,setfood]=useState([]);
    const [cash,setcash]=useState([]);
    const [load, setLoad] = useState();
    const [sum,setSum]=useState([])
    const[a,setA]=useState();
    let navigate = useNavigate();
    const payload ={
        cereals:sum[0],
        proteins:sum[1],
        legumes:sum[2],
        breakfast:sum[3],
        snacks:sum[4],

    }
    useEffect(()=>{
        // first request
        setLoad(true);
        console.log('First request succesful!')
        axiosClient.get('/requests/compare')
        .then(({data})=>{
            setLoad(false)
            setA(data)
        })
        .catch((err)=>{
            setLoad(false)
            console.log('error occured when making the request', err.response)
        });
    },[])
    useEffect(()=>{
         // second request
        setLoad(true);
        console.log('second request succesful!')

        axiosClient.get('/food')
        .then((res)=>{
            setLoad(false)
            setSum(res.data)
          })
        .catch(err =>{ setLoad(false); console.error(err)});
    },[])
    useEffect(()=>{
         //third request
         setLoad(true)
         console.log('This the diffrence payload',payload)
         axiosClient.post('/requests/diffrence',payload)
         .then(({data})=>{
             setLoad(false)
             console.log(data)
         })
         .catch((err)=>{
             setLoad(false)
             console.log('An error occured when get the diffrence', err.response)
         });
    },[])

    useEffect(()=>{
        
       

       
        //fourth request
        setLoad(true)
        console.log('fourth request succesful!')

        axiosClient.get('/sumfood')
        .then((res)=>{
        setLoad(false)
        setfood(res.data[0]);
        setcash(res.data[1]);
        })
        .catch(err =>{ setLoad(false); console.error(err)});

     },[])
  return (
    <>
    <br />
    <br />
      <div align='center' className="grid box">
        {load && <h4 align='center'>Loading . . . </h4>}
        <div className="grid box">
            <div className="flex box">
                <div className="card-container">
                    <h3>Donations</h3>
                    <div className="grid">
                    <div class="card3 ">
                <div class="amount">Kgs {sum[0]}</div> 
                <div class="title"> Cereals </div>
            </div>

            <div class="card3 ">
                <div class="amount">Kgs {sum[1]}</div> 
                <div class="title"> Proteins </div>
            </div>
            <div class="card3 ">
                <div class="amount">Kgs {sum[2]}</div> 
                <div class="title"> Legumes </div>
            </div>
            <div class="card3 ">
                <div class="amount">Kgs {sum[3]}</div> 
                <div class="title"> Breakfast </div>
            </div>
            <div class="card3 ">
                <div class="amount">Kgs {sum[4]}</div> 
                <div class="title"> Snacks </div>
            </div>
            <div class="card3 ">
                <div class="amount">${sum[5]}</div> 
                <div class="title"> Cash </div>
            </div> 
                    </div>
                </div>
                <div className="card-container">
                    <h3>Requests</h3>
                    <div className="grid">
                        <div class="card3 ">
                    <div class="amount negative">Kgs {a.Cereals}</div> 
                    <div class="title"> Cereals </div>
                </div>

                <div class="card3 ">
                    <div class="amount negative">Kgs {a.Proteins}</div> 
                    <div class="title"> Proteins </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">Kgs {a.Legumes}</div> 
                    <div class="title"> Legumes </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">Kgs {a.BreakFast}</div> 
                    <div class="title"> Breakfast </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">Kgs {a.Snacks}</div> 
                    <div class="title"> Snacks </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">${sum[5]}</div> 
                    <div class="title"> Cash </div>
                </div> 
                        </div>
                </div>
                <div className="card-container">
                    <h3>Diffrence</h3>
                    <div className="grid">
                        <div class="card3 ">
                    <div class="amount negative">Kgs {sum[0]}</div> 
                    <div class="title"> Cereals </div>
                </div>

                <div class="card3 ">
                    <div class="amount negative">Kgs {sum[1]}</div> 
                    <div class="title"> Proteins </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">Kgs {sum[2]}</div> 
                    <div class="title"> Legumes </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">Kgs {sum[3]}</div> 
                    <div class="title"> Breakfast </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">Kgs {sum[4]}</div> 
                    <div class="title"> Snacks </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">${sum[5]}</div> 
                    <div class="title"> Cash </div>
                </div> 
                        </div>
                </div>
              
            </div>
        </div>
        <div className="flex box">TOTAL</div>
        <button className='btn' onClick={()=>navigate(-1)}> Back </button>
      </div>
    </>
  )
}

export default CompareCards
