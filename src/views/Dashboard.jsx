import { Link } from 'react-router-dom'
import image from '../Assets/img/image1.jpg'
export default function Dashboard() {

  return (
    <section className='my-element'>
      <br />
      <div className="box">
          <h3 align="center">Dashboard</h3>
          <h3 align="center">Hello user welcome to the food donation management system we are happy to have you here and would wish to tell you alittle about us</h3>
          <div className="flex box mg-t">
            <p>Your donation has the power to make a real difference in the lives of those in need. By contributing to this just cause, you have the opportunity to bring hope, support, and positive change. Together, we can create a brighter future and alleviate suffering. Your generosity matters, and every dollar counts towards building a more compassionate and equitable world. Join us in making a profound impact by donating today.</p>
              <div className="image">
              <img src={image} alt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio?" />
          </div>
          </div>
          <div className="box mg-t">

            <Link align="center" className='btn btn-w' to="/form/NgoRequest"> Donate </Link>
          </div>

         
          <div className="flex box mg-t">
            

            <Link className='btn' to="/users/requests">Requests</Link>
            <Link className='btn' to="/users/user">User</Link>
          </div>
      </div>
    </section>
  )
}
 