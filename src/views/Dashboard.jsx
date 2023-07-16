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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laudantium, quas voluptates ab ipsa nisi esse nobis iusto, fugit molestiae aliquid? Nostrum facilis dicta obcaecati velit non animi porro ut.</p>
              <div className="image">
              <img src={image} alt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio?" />
          </div>
          </div>
          <div className="flex box mg-t">

              <div className="image">
                <img src={image} alt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio?" />
              </div>
              <p align="right">Lorem ipsm dolor sit amet consectetur adipisicing elit. Ducimus, laudantium, quas voluptates ab ipsa nisi esse nobis iusto, fugit molestiae aliquid? Nostrum facilis dicta obcaecati velit non animi porro ut.</p>
          </div>
          <div className="flex box mg-t">
            
            <Link className='btn' to="/form/Food">Food</Link>
            <Link className='btn' to="/users/ngo">Ngo</Link>
            <Link className='btn' to="/users/requests">Requests</Link>
            <Link className='btn' to="/users/user">User</Link>
          </div>
      </div>
    </section>
  )
}
 