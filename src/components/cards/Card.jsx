import React from 'react'


const Card = ({ item, ngodata }) => {

       
  return (
    <>
    <div class="card4">
        <div class="header4">{item.typeoffood}</div>
        <div class="content4">
            <p>Quantity needed <span> {item.quantity} Kilograms</span></p>
            <p>Number Of Beneficiaries are <span> {item.beneficiaries}</span></p>
        </div>
        <div class="footer4">Location <span>{item.location}</span></div>
    </div>
      
    </>

  )
}

export default Card
