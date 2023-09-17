import { Link, Navigate } from 'react-router-dom'
import image from '../Assets/img/pic1.jpeg'
import image3 from '../Assets/img/opharned.jpg'
import image4 from '../Assets/img/mulnutrition.jpg'
import image5 from '../Assets/img/image1.jpg'
import image6 from '../Assets/img/dirtywater.jpeg'
import image7 from '../Assets/img/slums.jpg'
import image8 from '../Assets/img/lackofhospitals.png'
import { useStateContext } from '../components/contexts/ContextProvider'
import { useRef, useState } from 'react';
import axiosClient from '../axios-client';
export default function Dashboard() {
  const {user,type}=useStateContext();
  const cashRef = useRef();
  const[load,setLoad]=useState();
  const onSubmit=(event)=>{
    event.preventDefault()
    if(!window.confirm('THANK YOU FOR DONTING TO A JUST COURSE. WE HOPE TO SEE YOU AGAIN')){
      return
    }else{
      const payload = {
        cereals: 0,
        proteins: 0,
        legumes: 0,
        breakfast: 0,
        snacks: 0,
        cash: cashRef.current.value,
      }
      setLoad(true)
       axiosClient.post('/food',payload).then(({data})=>{
         console.log(data);
         setLoad(false)
        }).catch
       (err=>{
        setLoad(false)
         const response = err.response;
         if(response && response.status === (422 || 500 || 404) ){
           console.log(response.data.errors)
  
         };
       })
  
    }
  }
  return (
    <section className='my-element'>
      <br />
      <div className="box">
      <br />
   
        <br />
        {type==='admin'?(<h2 align='center'>ADMINSTRATOR</h2>):(

<h3 typeof='hidden' align="center">Welcome to our donation app, where every act of generosity has the power to ignite positive change. Join us in making a difference today</h3>


        )}
          <div className="flex box box mg-t">
            <div className="grid">
            <h1 className='stroke-text' >WELCOME</h1>
            <h2  className='huge'>{user}😇🥳</h2>
   {
    type!=='admin'&&   <h3 className='box'>Monthly giving is
    the perfect way
    to help our
    less fortunate brothers
    and sisters.</h3>
   }
              <br />
              <br />
              {type==='user' && <Link align="center" className='btn btn-w' to="/form/NgoRequest"> Donate Food </Link>}
           
            </div>



              <div className="image">
              <img className='img-s' src={image} alt="This is an image of a desert" />
          </div>
          </div>
          {load && <h4 align='center'> D o n a t i n g . . </h4>}
          <form onSubmit={onSubmit}>
            {type==='user'&& <div className="box flex form-control">
            <button  type='submit' className="btn">DONATE IN CASH</button>
          
              <input  ref={cashRef} placeholder='min 1000' className='short-w' type="number" />
              <h1>kshs</h1>
           
          </div>}
         
          </form>
          {type==='user' &&
            <div className='card-container'>
            <br />
            <h3 align='center'>PROVIDE SUPPORT FOR A SPECIFIC AREA OF NEED YOU ARE MOST PASSIONATE ABOUT.</h3>
            <br />
            <br />
            <br />
				<div className="card">
				  <img src={image5} alt="Image 1"/>
				  <div className="details">
					<h2 align='center'>Extreme Drought</h2>
					<p align='center'> Extreme drought: parched earth, dwindling resources, and urgent need for conservation.</p>
				  </div>
				</div>				
				<div className="card">
				  <img src={image4} alt="Image 2"/>
				  <div className="details">
					<h2 align='center'>Malnutrition</h2>
					<p align='center'>Malnutrition harms health, hinders growth, and requires global efforts for eradication</p>
				  </div>
				</div>			
				<div className="card">
				  <img src={image3} alt="Image 3"/>
				  <div className="details">
					<h2 align='center'>Orphaned or Abandoned Children</h2>
					<p align='center'>Orphaned or abandoned children deserve love, care, and support for a brighter, hopeful future</p>
				  </div>
				</div>
          
         
				<div className="card">
				  <img src={image6} alt="Image 1"/>
				  <div className="details">
					<h2 align='center'>Unsafe Drinking Water</h2>
					<p align='center'> Unsafe drinking water endangers lives, urging investment in clean and accessible water sources for communities worldwide</p>
				  </div>
				</div>				
				<div className="card">
				  <img src={image8} alt="Image 2"/>
				  <div className="details">
					<h2 align='center'>Lack of Medical Care</h2>
					<p align='center'>"Lack of medical care leads to preventable suffering, emphasizing the importance of accessible healthcare for all</p>
				  </div>
				</div>			
				<div className="card">
				  <img src={image7} alt="Image 3"/>
				  <div className="details">
					<h2 align='center'>Unsafe Housing</h2>
					<p align='center'>Unsafe housing jeopardizes lives, demanding immediate attention to ensure secure, healthy living conditions for all</p>
				  </div>
				</div>
			  </div>
          }
        
        <div className="box">
        <div className="flex box mg-t">
            {type==='user'?(
              <Link align='center' className='btn btn-w' to="/requests">View Requests</Link>
            ):(

<Link align='center' className='btn btn-w' to="/users/requests">Requests</Link>

            )}
            {type==='user'?(

<Link align='center' className='btn btn-w' to="/request/compare"> Donations </Link>
            ):(

<Link align='center' className='btn btn-w' to="/users/user">User</Link>
            )}
            

          </div>
          </div>
       {type==='user' &&
        <div className="card-container2">
        <div className="card2">
           
					<h2 align='center'>Donate by Mail</h2>

					<p align='center'>To donate by check or to a specific cause, please complete this donation form by printing and mailing to:

 

American Red Cross 
PO Box 37839
Boone, IA 50037-0839

Print Donation Form</p>
				</div>	
        <div className="card2">
            
         

					<h2 align='center'>Donate By Phone</h2>

					<p align='center'>To donate by phone or to get assistance with your donation, please contact us at 1-800-HELP NOW +254707973964.
          You can also reach us at:
          Español:+234234534534
          TDD Operator: +923746233242</p>
				</div>	
        </div>
       }
       

        <div className="flex box mg-t">
            {type==='admin' &&           <Link align='center' className='btn btn-w' to="/users/food">Food Bank</Link>}
            {type!=='user'&&  <Link align='center' className='btn btn-w' to="/users/ngo"> N G O </Link>}
           


        </div>
      </div>
    </section>
  )
}
 