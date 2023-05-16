import Header from "./components/Header";
import axios from 'axios';

import Form from "./components/Form";
import Table from "./components/Table";
import Button from "./components/Button"
import { useEffect, useState, useCallback } from "react";
function App() {
  const action = false
  const [users, setUser] = useState([]);
  const [ngo, setNgo] = useState([]);
  const [food, setFood] = useState([]);
  const [math, setMaths] = useState([]);
  const [requests, setRequests] = useState([]);
  const [state, setState] = useState([]);
  useEffect(()=>{
    //users data
    axios.get('http://127.0.0.1:8000/api/showusers').then((res)=>{
      setUser(res.data)
    })
    .catch(err => console.log(err));
    //ngo data
    axios.get('http://127.0.0.1:8000/api/ngo/show').then((res)=>{
      setNgo(res.data)
    })
    .catch(err => console.error(err));
    //posted requests 
    axios.get('http://127.0.0.1:8000/api/PostRequest').then((res)=>{
      setRequests(res.data)
    })
    .catch(err => console.error(err));
    // food bank

      axios.get('http://127.0.0.1:8000/api/food').then((res)=>{
      setMaths([
         res.data[0],
          res.data[1],
    res.data[2],
         res.data[3],
         res.data[4],
         res.data[5],
       ])
      })
      .catch(err => console.error(err));

  },[]);
  const foodie = useCallback(()=>{
  setState('foodie');
  },[])
  const ngoset = useCallback(()=>{
  setState('ngoset');
  },[])
  const userss = useCallback(()=>{
  setState('userss');
  },[])
  const setrequests = useCallback(()=>{
  setState('setrequests');
  },[])

  return (
    <div className="flex">
      <Header login='' register=''/>
    <aside>

      <nav>
       <Button setter={foodie}text='Food'/>
       <Button setter={ngoset}text='NGO'/>
       <Button setter={userss}text='USER'/>
       <Button setter={setrequests}text='Requests'/>


     
      </nav>
    </aside>
    <main>
      
      {action  ? (<Form />): (<Table users={users} food={food} ngo={ngo} requests={requests} math={math} state={state}/>)}
    </main>

    </div>
    
  );
}

export default App;
