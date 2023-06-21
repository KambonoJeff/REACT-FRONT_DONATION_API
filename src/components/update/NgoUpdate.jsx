import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosClient from '../../axios-client';

export default function NgoUpdate() {
    const id = useParams();
    const ngo = {
        id:null,
        name:'',
        email:'',
        location:'',
        beneficiaries:'',

    }
    const [load ,setLoad]= useState();
    if(id){
        axiosClient.get('/ngo')
    }
  return (
    <>
      


    </>
  )
}
