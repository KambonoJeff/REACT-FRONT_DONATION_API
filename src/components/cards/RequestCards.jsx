import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import axiosClient from '../../axios-client';
const RequestCards = () => {
    const [requests , setRequests] =useState([]);

    let navigate = useNavigate();
    const [load,setLoad]=useState();
  const [currentPage, setCurrentPage] = useState(1); // Track the current page


    const _requests =()=>{
        setLoad(true)
        axiosClient.get(`/PostRequest?page=${currentPage}`).then((res)=>{
            setLoad(false)

        setRequests(res.data.data)})
        .catch((err)=>{
            setLoad(false)
            console.log('error occured while making the request',err)
        });
       }
       useEffect(()=>{
        _requests()
       },[currentPage])


       const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
      };
    
      const handlePreviousClick = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };

  return (
    <>
    <br />
    <br />
    <br />
    <h3 align='center'> The various request that are made by our registered NGOS aroung the country are shown below from the earliest and most crucial.</h3>
       {load && <h4 align='center'>Loading . . . </h4>}
       <div className="card-container">

       {requests.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      </div>

     

    <button  className='btn' onClick={()=>{navigate(-1)}}> Back </button>
    
    <button className='btn' onClick={handlePreviousClick} disabled={currentPage === 1}>
        Previous
      </button>
    <button className='btn' onClick={handleNextClick}>Next</button>

    </>
  )
}

export default RequestCards
