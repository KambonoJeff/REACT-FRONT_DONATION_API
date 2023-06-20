import React from 'react'

export default function FoodUpdate() {
    const {id} = useParams();
    const [load,setLoad] = useState();

    const [user,setUser] =useState({
      user_id:null,
      typeoffood:'',
      quantity:'',
      beneficiaries:'',
      location:'',
      status:''
    });
     if(id){
      useEffect(()=>{
        setLoad(true)
        axiosClient.get(`/food/${id}`).then(({data})=>{
          setLoad(false);
          setUser(data)
    
          }).catch((err)=>{
            setLoad(false)
          })
    
      },[])
      
    }

  return (
    <>
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <input placeholder='User ID' value={user.id} onChange={event =>{setUser(event.target.value)}}/>
            <select placeholder='Food Type'  name="type" id="type">
                <option  value="Cereals">Cereals</option>
                <option value="snacks">snacks</option>
                <option value="legumes">legumes</option>
                <option value="proteins">proteins</option>
                <option value="breakfast">breakfast</option>
                <option value="cash">cash</option>
              </select>
            <input placeholder='User ID' value={user.id} onChange={event =>{setUser(event.target.value)}}/>
            <input placeholder='User ID' value={user.id} onChange={event =>{setUser(event.target.value)}}/>
            <input placeholder='User ID' value={user.id} onChange={event =>{setUser(event.target.value)}}/>
            </div>
        
        
        </form>
      
    </>

  )
}
