import React, { useEffect, useMemo, useState } from 'react'
import axiosClient from '../../axios-client';
import { useNavigate } from 'react-router-dom';
import RequestCard from './card/RequestCard';

export default function CompareCards
() {
    const [load, setLoad] = useState();
    let navigate = useNavigate();
      const [asset, setAsset]=useState([]);
  const[a,setA]=useState([]);
  const[riri , setRiri]=useState([]);

  useEffect(()=>{
      getData()

  },[])
  function getData(){
       // second request
     setLoad(true);

     axiosClient.get('/food')
     .then((res)=>{
         setLoad(false);
         setAsset(res.data[0]);
       })
     .catch(err =>{ setLoad(false); console.error(err)});


      compare();
      getDiffrence();

  }
     
  function compare(){
      // first request
      setLoad(true);
      axiosClient.get('/requests/compare')
      .then(({data})=>{
          setLoad(false);
          setA(data)
      })
      .catch((err)=>{
          setLoad(false);
          console.log('error occured when making the request', err.response);
      });

  }
  function getDiffrence(){
      //third request
      setLoad(true)
      axiosClient.get('/requests/diffrence')
      .then(({data})=>{
          setLoad(false)
          console.log('Compare card retuerned dara',data)
          setRiri(data[0])
      })
      .catch((err)=>{
          setLoad(false)
          console.log('An error occured when get the diffrence', err.response)
      });

    }
        



    // useEffect(()=>{
        
       

       
    //     //fourth request
    //     setLoad(true)
    //     console.log('fourth request succesful!')

    //     axiosClient.get('/assetfood')
    //     .then((res)=>{
    //     setLoad(false)
    //     setfood(res.data[0]);
    //     setcash(res.data[1]);
    //     })
    //     .catch(err =>{ setLoad(false); console.error(err)});

    //  },[])
  return (
    <>
    <br />
    <br />
      <div align='center' className="grid box">
        {load && <h4 align='center'>Loading . . . </h4>}
        <div className="grid box">
            <div className="flex box">
<button onClick={()=>getData()} className='btn'> Fetch data </button>

                 <div className="card-container">
                    <h3>Donations</h3>
                    <div className="grid">
                    <div class="card3 ">
                <div class="amount">Kgs {asset[0]}</div> 
                <div class="title"> Cereals </div>
            </div>

            <div class="card3 ">
                <div class="amount">Kgs {asset[1]}</div> 
                <div class="title"> Proteins </div>
            </div>
            <div class="card3 ">
                <div class="amount">Kgs {asset[2]}</div> 
                <div class="title"> Legumes </div>
            </div>
            <div class="card3 ">
                <div class="amount">Kgs {asset[3]}</div> 
                <div class="title"> Breakfast </div>
            </div>
            <div class="card3 ">
                <div class="amount">Kgs {asset[4]}</div> 
                <div class="title"> Snacks </div>
            </div>
            <div class="card3 ">
                <div class="amount">${asset[5]}</div> 
                <div class="title"> Cash </div>
            </div> 
                    </div>
                </div>
                <RequestCard a={a}/> 
                <div className="card-container">
                    <h3>Diffrence</h3>
                    <div className="grid">
                        <div class="card3 ">
                    <div class="amount negative">Kgs {riri[0]}</div> 
                    <div class="title"> Cereals </div>
                </div>

                <div class="card3 ">
                    <div class="amount negative">Kgs {riri[1]}</div> 
                    <div class="title"> Proteins </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">Kgs {riri[2]}</div> 
                    <div class="title"> Legumes </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">Kgs {riri[3]}</div> 
                    <div class="title"> Breakfast </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">Kgs {riri[4]}</div> 
                    <div class="title"> Snacks </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">$ cash</div> 
                    <div class="title"> Cash </div>
                </div> 
                        </div>
                </div> 
              
            </div>
        </div>
        <button className='btn' onClick={()=>navigate(-1)}> Back </button>
      </div>
    </>
  )
}

