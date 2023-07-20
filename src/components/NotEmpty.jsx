import React from 'react'
import { useStateContext } from './contexts/ContextProvider'

export default function NotEmpty() {
  const {user, admin,ngo} = useStateContext();

   const details = {'adminO': admin,
   'UserO': user,
   'adminO' : admin}

const check=()=>{
  for(const data of details ){
    if(data = true){
      return data;
    }
  }
  res = 'All empty';
  return res;
}
  


  console.log('return :',user);
  return (
    <div>
      <h2>not empty function</h2>
      <h1>{check}</h1>
    </div>
  )
}
