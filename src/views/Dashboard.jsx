import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <br />
      <div className="box">
          <h3>Dashboard</h3>
          <h3>Hello user welcome to the food donation management system we are happy to have you here and would wish to tell you alittle about us</h3>
          <div className="flex box mg-t">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laudantium, quas voluptates ab ipsa nisi esse nobis iusto, fugit molestiae aliquid? Nostrum facilis dicta obcaecati velit non animi porro ut.</p>
              <div className="image">
                <img src="../Assets/img/image1.jpg" alt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio?" />
              </div>
          </div>
          <div className="flex box mg-t">

              <div className="image">
                <img src="../Assets/img/image1.jpg" alt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio?" />
              </div>
              <p align="right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laudantium, quas voluptates ab ipsa nisi esse nobis iusto, fugit molestiae aliquid? Nostrum facilis dicta obcaecati velit non animi porro ut.</p>
          </div>
          <div className="flex box mg-t">
            <div className="tabs">write</div>
            <div className="tabs">write</div>
            <div className="tabs">write</div>

          </div>
      </div>
    </div>
  )
}
