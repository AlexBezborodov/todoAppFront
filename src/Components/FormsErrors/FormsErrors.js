import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <div className='border rounded border-danger d-flex justify-content-center align-items-center my-2 text-danger '>
              <p className='my-auto' key={i}>{fieldName} {formErrors[fieldName]}</p>
          </div>
          
        )        
      } else {
        return '';
      }
    })}
  </div>

export default FormErrors;