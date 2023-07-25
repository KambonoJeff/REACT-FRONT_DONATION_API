import { Link } from 'react-router-dom'
import image from '../Assets/img/pic3.jpg'
import image2 from '../Assets/img/pic2.jpg'
import { useStateContext } from '../components/contexts/ContextProvider'
export default function Dashboard() {
  const {user,admin,ngo}=useStateContext();
  return (
    <section className='my-element'>
      <br />
      <div className="box">
        <h2 align="center"> Hello {admin} . </h2>
          <h3 align="center">Welcome to our donation app, where every act of generosity has the power to ignite positive change. Join us in making a difference today</h3>
          <div className="flex box box mg-t">
            <p>I hope this message finds you well. I want to share an incredible opportunity to make a lasting impact in our world. By donating to this just cause, you have the chance to be a catalyst for change. Your contribution will provide essential resources, uplift marginalized communities, and promote equality and justice. Every dollar you give has the power to transform lives, restore hope, and create a brighter future for those who need it most. Together, let's stand up for what is right and make a difference that resonates for generations to come. Please consider donating and being part of this extraordinary journey toward a more compassionate and equitable society.
              <br />
              <br />
            <Link align="center" className='btn btn-w' to="/form/NgoRequest"> Donate </Link>

</p>

              <div className="image">
              <img src={image} alt="This is an image of a desert" />
          </div>
          </div>

          
          <div className="box">
          <div className="flex box box mg-t">
          <div className="image">
              <img src={image2} alt="This is an image of a desert" />
              </div>

            <p>Through the selfless act of donation, a life was saved. In the darkest hour, compassion prevailed, providing vital resources and a second chance. It's a reminder that each contribution, no matter how small, holds the power to transform and bring hope where it's needed most.
              <br />
              <br />
              <div className="flex box mg-t">
            
              <Link align='center' className='btn btn-w' to="/users/requests">Requests</Link>
            <Link align='center' className='btn btn-w' to="/users/user">User</Link>

          </div>
          </p>

          </div>
          </div>

          <div className="box">
          <div className="flex box box mg-t">
          <p>Through the selfless act of donation, a life was saved. In the darkest hour, compassion prevailed, providing vital resources and a second chance. It's a reminder that each contribution, no matter how small, holds the power to transform and bring hope where it's needed most.
              <br />
              <br />
              <div className="flex box mg-t">
            
              <Link align='center' className='btn btn-w' to="/users/ngo"> N G O </Link>
            <Link align='center' className='btn btn-w' to="/users/user">User</Link>

          </div>
          </p>
          <div className="image">
            
              <img src={image2} alt="This is an image of a desert" />
              </div>

            

          </div>
          </div>
          <div align='center'>
          
          </div>
          
      </div>
    </section>
  )
}
 