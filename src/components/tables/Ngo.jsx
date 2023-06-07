import React from 'react'
import Button from '../Button'

const Ngo = (ngo) => {
  return (
    <>
              <h2 align='center'>NGO table</h2>
        <br/>   
            <table>
        
            <thead className="thead">             
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>email</th>
                <th>location</th>
                <th>beneficiaries</th>
                <th>other</th>
            </tr>     
            </thead>
            <tbody>
                {
                    ngo.map((data, index)=>(
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.location}</td>
                            <td>{data.beneficiaries}</td>
                            <td className='flex'>
                                <Button text='Edit'/>
                                <Button text='Del'/>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
            </table>

    </>
  )
}

export default Ngo
