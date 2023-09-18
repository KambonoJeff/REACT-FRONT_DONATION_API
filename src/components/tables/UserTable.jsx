import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import { Link, useNavigate } from 'react-router-dom';

const UserTable = () => {
  const[users ,setUsers]=useState([]);
  let navigate = useNavigate();
  const [load,setLoad]=useState();
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  const _users =()=>{
    setLoad(true)
    axiosClient.get(`/showusers?page=${currentPage}`).then((res)=>{
        setLoad(false)
    setUsers(res.data.data)})
    .catch((err)=>{
        setLoad(false)
        console.error(err)
    });
   }
   useEffect(()=>{
    _users()
   },[currentPage]);
   
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

   const onDelete=(user)=>{
    if(!window.confirm('Are You Sure You want to Delete')){
        return
    }else{
        setLoad(true)
        axiosClient.delete(`/showusers/${user.id}`).then((res)=>{setLoad(false);console.log(res); _users();}).catch((err)=>{setLoad(false);console.log(err)})
    }
   }
  return (
    <>
          <br/> 
            <h2 align='center'>USERS table</h2>
            <br/>   

            <Link  align='right' className='btn-green' to={'/users/new'}>Add User</Link>
            <br/>  
            {load && <h4 align='center'> Loading . . . </h4>} 
            <br/>   
                <table>
            
                <thead className="thead">             
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>email</th>
                    <th>type</th>
                    <th>Created AT</th>
                    <th>other</th>
                </tr>     
                </thead>
                <tbody>
                    {
                        users.map((user, index)=>(
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.type}</td>
                                <td>{user.created_at}</td>
                                <td className='flex'>
                                <Link className='btn' to={'/user/update/'+ user.id}>Edit</Link>
                                    <button onClick={event=>onDelete(user)} className='btn'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
                </table>
                <br />
                <button className='btn' onClick={()=>navigate(-1)}>Back</button>
                <button className='btn' onClick={handlePreviousClick} disabled={currentPage === 1}>
        Previous
      </button>
      <button className='btn' onClick={handleNextClick}>Next</button>
    
    
    
    </>
  )
}

export default UserTable
