import React from 'react'
import { useStateContext } from './contexts/ContextProvider'



export default function NotEmpty() {
  const {user, admin,ngo} = useStateContext();

   const details = {'adminO': admin,
   'UserO': user,
   'adminO' : admin}


  for(const data of constants ){
    if(data = true){
      return data;
    }
  }


  console.log('return :',user);
  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}
