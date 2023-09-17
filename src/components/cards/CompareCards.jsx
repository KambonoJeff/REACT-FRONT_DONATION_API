import React from 'react'

const CompareCards = () => {
  return (
    <>
      <div className="grid box">
        <div className="grid box">
            <h2>Details</h2>
            <div className="flex box">
            <div className="card-container">
            <h3>Donations</h3>
        </div>
        <div className="card-container">
            <h3>Requests</h3>
        </div>
        </div>
        </div>
        <div className="flex box">TOTAL</div>
      </div>
    </>
  )
}

export default CompareCards
