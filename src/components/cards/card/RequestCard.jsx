import React from 'react'

const RequestCard = ({a}) => {
  return (
    <>
         <div className="card-container">
                    <h3>Requests</h3>
                    <div className="grid">
                        <div class="card3 ">
                    <div class="amount negative">Kgs {a.Cereals}</div> 
                    <div class="title"> Cereals </div>
                </div>

                <div class="card3 ">
                    <div class="amount negative">Kgs {a.Proteins}</div> 
                    <div class="title"> Proteins </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">Kgs {a.Legumes}</div> 
                    <div class="title"> Legumes </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">Kgs {a.Breakfast}</div> 
                    <div class="title"> Breakfast </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">Kgs {a.Snacks}</div> 
                    <div class="title"> Snacks </div>
                </div>
                <div class="card3 ">
                    <div class="amount negative">$cash</div> 
                    <div class="title"> Cash </div>
                </div> 
                        </div>
                </div>
      
    </>
  )
}

export default RequestCard
