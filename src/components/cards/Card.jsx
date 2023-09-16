import React from 'react'


const Card = ({ item, ngodata }) => {

       
  return (
    <>
    <div class="card4">
        <div class="header4">{item.typeoffood}</div>
        <div class="content4">
            <p>Quantity needed {item.quantity} Kilograms</p>
            <p>Number Of Beneficiaries are {item.beneficiaries}</p>
        </div>
        <div class="footer4">Location {item.location}</div>
    </div>
      
    </>

  )
}

export default Card
