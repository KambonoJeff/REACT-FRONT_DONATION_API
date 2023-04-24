import React from 'react'
const InputDetail = ({ label,placeh, type }) => {
  return (
    <>
        <div className='form-control'>
                <label >
                    {label}
                </label>
                <input 
                type={type}
                name="fname" 
                placeholder={placeh} />
               
            </div>
    </>
  )
}

export default InputDetail
