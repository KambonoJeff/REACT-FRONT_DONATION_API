import { Link, Navigate } from 'react-router-dom'
import image from '../Assets/img/pic3.jpg'
import image2 from '../Assets/img/pic2.jpg'
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
  const {user}=useStateContext();
  const cashRef = useRef();
  const redirect =()=>{
    console.log('redirecting .....')
    return <Navigate to="/users/food"/>
  }

  const onSubmit=(event)=>{
    event.preventDefault()
    const payload = {
      cereals: 0,
      proteins: 0,
      legumes: 0,
      breakfast: 0,
      snacks: 0,
      cash: cashRef.current.value,
    }
     axiosClient.post('/food',payload).then(({data})=>{
       console.log(data);
        redirect();
      }).catch
     (err=>{
       const response = err.response;
       if(response && response.status === (422 || 500 || 404) ){
         console.log(response.data.errors)

       };
     })

  }
  return (
    <section className='my-element'>
      <br />
      <div className="box">
        <h2 align="center"> Hello {user}  </h2>
        <br />
          <h3 align="center">Welcome to our donation app, where every act of generosity has the power to ignite positive change. Join us in making a difference today</h3>
          <div className="flex box box mg-t">
            <p>I hope this message finds you well. I want to share an incredible opportunity to make a lasting impact in our world. By donating to this just cause, you have the chance to be a catalyst for change. Your contribution will provide essential resources, uplift marginalized communities, and promote equality and justice. Every dollar you give has the power to transform lives, restore hope, and create a brighter future for those who need it most. Together, let's stand up for what is right and make a difference that resonates for generations to come. Please consider donating and being part of this extraordinary journey toward a more compassionate and equitable society.
              <br />
              <br />
            <Link align="center" className='btn btn-w' to="/form/NgoRequest"> Donate Food </Link>

</p>

              <div className="image">
              <img className='img' src={image} alt="This is an image of a desert" />
          </div>
          </div>
          <form onSubmit={onSubmit}>
          <div className="box flex form-control">
            <button  type='submit' className="btn">DONATE IN CASH</button>
          
              <input  ref={cashRef} placeholder='min 1000' className='short-w' type="number" />
              <h1>kshs</h1>
           
          </div>
          </form>
          <div className='card-container'>
            <br />
            <h3 align='center'>PROVIDE SUPPORT FOR A SPECIFIC AREA OF NEED YOU ARE MOST PASSIONATE ABOUT.</h3>
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
			  </div>
          <div className='card-container'>
         
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
        <div className="box">
        <div className="flex box mg-t">
            
              <Link align='center' className='btn btn-w' to="/users/requests">Requests</Link>
            <Link align='center' className='btn btn-w' to="/users/user">User</Link>

          </div>
          </div>

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

          <div className="box">
          <div className="flex box box mg-t">
          <p>Through the selfless act of donation, a life was saved. In the darkest hour, compassion prevailed, providing vital resources and a second chance. It's a reminder that each contribution, no matter how small, holds the power to transform and bring hope where it's needed most.
              <br />
              <br />
              <div className="flex box mg-t">
            
              <Link align='center' className='btn btn-w' to="/users/ngo"> N G O </Link>
            <Link align='center' className='btn btn-w' to="/users/food">Food Bank</Link>

          </div>
          </p>
          <div className="image">
            
              <img className='img' src={image2} alt="This is an image of a desert" />
              </div>

            

          </div>
          </div>
          <div align='center'>
          
          </div>
          
      </div>
    </section>
  )
}
 