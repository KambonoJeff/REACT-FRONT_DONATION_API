import React, { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
import axiosClient from '../../axios-client'

const UserUpdate = () => {
    const {id}=useParams()
    const [load,setLoad]=useState()
    const [user,setUser]=useState({
        id:null,
        name:'',
        email:'',
        type:'',
        password:''
    })
    useEffect(()=>{
        setLoad(true)
        axiosClient.get(`showoneuser/${id}`)
        .then(({data})=>{
            setLoad(false)
            console.log(data)
            setUser(data)
        })
        .catch((err)=>{
            setLoad(false)
            console.log('Error occured while making the rquest',err)
        })
    },[])
    const onSubmit = ( event )=>{
      event.preventDefault()
     
      setLoad(true)
      axiosClient.post(`/edit/user/${id}`,user)
      .then(({data})=>{
          setLoad(false)
          console.log('this data returned',data)
      })
      .catch(({err})=>{
          setLoad(false)
          console.log('An Error occured while making the request',err)
      })
     
  }




  return (
    <>
      <br />
      <br />
      <br />
      {user.id && <h3 align='center'>user name: {user.name}</h3>}
      {load && <h4 align='center'> Loading . . . </h4>}
      <form onSubmit={onSubmit}>

        <div className="form-control">
        <input type="text" value={user.name} onChange={event=>setUser({...user,name: event.target.value})} />
        <input type="email" value={user.email} onChange={event=>setUser({...user, email: event.target.value})} />
        <input type="text" value={user.type} readOnly />
        <input type="text" value='password' readOnly />

        <button className='btn' type='submit'> Edit </button>
        <Link className='btn' to={'/users/user'}> Back </Link>

   


        </div>
      </form>
    </>
  )
}

export default UserUpdate
