import TrialSubmit from './trial'

function Form() {

    return (
      <div className="form">
        <form onSubmit={TrialSubmit} method="Post">
          <label htmlFor='firstName' aria-label="first name" className="sr-hidden">First Name</label>
          <input id='first name' type='text' placeholder="First Name"></input>
          <label htmlFor='lastName' aria-label="last name" className="sr-hidden">Last Name</label>
          <input id='last name' type='text' placeholder="Last Name"></input>
          <label htmlFor='Email' aria-label="email address" className="sr-hidden">Email Address</label>
          <input id='email address' type='email' placeholder="Email Address" aria-required="true" required></input>
          <label htmlFor='Password' aria-label="password" className="sr-hidden">Password</label>
          <input id='password' type='password' placeholder="Password" aria-required="true" required></input>

          <button className='submit' type='submit'>Claim your free trial</button>
          <p className="p_terms">By clicking the button, you are agreeing to our <span className="span_terms">Terms and Services</span></p>
        </form>
      </div>
    )
  }
  
  export default Form