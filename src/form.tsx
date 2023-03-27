import trialSubmit from './submit'
function Form() {
 
    return (
      <div className="form">
        <form>
          <label htmlFor='firstName' aria-label="first_name" className="sr-hidden">First Name</label>
          <input id='first_name' type='text' placeholder="First Name" aria-required="true" required></input>
          <label htmlFor='lastName' aria-label="last_name" className="sr-hidden">Last Name</label>
          <input id='last_name' type='text' placeholder="Last Name" aria-required="true" required></input>
          <label htmlFor='Email' aria-label="email_address" className="sr-hidden">Email Address</label>
          <input id='email_address' type='email' placeholder="Email Address" aria-required="true" required></input>
          <label htmlFor='Password' aria-label="password" className="sr-hidden">Password</label>
          <input id='password' type='password' placeholder="Password" aria-required="true" required></input>

          <button className='submit' type='submit' onClick={trialSubmit}>Claim your free trial</button>
          <p className="p_terms">By clicking the button, you are agreeing to our <span className="span_terms">Terms and Services</span></p>
        </form>
      </div>
    )
  }
  
  export default Form