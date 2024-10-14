import React, { useState } from 'react'

function Form() {

    const [submit,setSubmit] = useState(false)

    const toggleSubmit = () => (
        setSubmit(true)
    )

  return (
    <div>
        {
            submit 
            ?
            <div className='box'>
            <h1>ThankYou for Submitting the Form!</h1>
            </div>
            :
            <form className='box' onSubmit={toggleSubmit}>
          <div className="mb-3">
            <label for="Namelabel" className="form-label">Name</label>
            <input type="text" className="form-control" id="Nameinput" aria-describedby="nameHelp" required />
            <div id="nameHelp" className="form-text">Please enter your full name.</div>
          </div>
          <div className="mb-3">
            <label for="Emaillabel" className="form-label">Email address</label>
            <input type="email" className="form-control" id="EmailInput" aria-describedby="emailHelp" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="TextArealabel" className="form-label">Message</label>
            <textarea className="form-control" id="TextArealabelformcontrol" rows="3" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
        
        }
      </div>
  )
}

export default Form
