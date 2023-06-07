import React from 'react'

const UserTable = (users) => {
  return (
    <>
          <br/> 
            <h2 align='center'>USERS table</h2>
            <br/>   
                <table>
            
                <thead className="thead">             
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>email</th>
                    <th>type</th>
                    <th>verifiedAT</th>
                    <th>other</th>
                </tr>     
                </thead>
                <tbody>
                    {
                        users.map((user, index)=>(
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.type}</td>
                                <td>{user.email_verified_at}</td>
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

export default UserTable
