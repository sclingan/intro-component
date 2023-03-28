import trialSubmit from './submit'
import error from '../public/images/icon-error.svg'
function Form() {
 
    return (
      <div className="form">
        <form>
          <label htmlFor='firstName' aria-label="first_name" className="sr-hidden">First Name</label>
          <div className='input_wrapper'>
          <input id='first_name' type='text' placeholder="First Name" aria-required="true" required></input>
          <img src={error} alt="" className='error_icon'></img>
          </div>
          <p className='error'>First Name cannot be empty</p>
          <label htmlFor='lastName' aria-label="last_name" className="sr-hidden">Last Name</label>
          <div className='input_wrapper'>
          <input id='last_name' type='text' placeholder="Last Name" aria-required="true" required></input>
          <img src={error} alt="" className='error_icon'></img>
          </div>
          <p className='error'>Last Name cannot be empty</p>
          <label htmlFor='Email' aria-label="email_address" className="sr-hidden">Email Address</label>
          <div className='input_wrapper'>
          <input id='email_address' type='email' placeholder="Email Address" aria-required="true" required></input>
          <img src={error} alt="" className='error_icon'></img>
          </div>
          <p className='error'>Looks like this is not an email</p>
          <label htmlFor='Password' aria-label="password" className="sr-hidden">Password</label>
          <div className='input_wrapper'>
          <input id='password' type='password' placeholder="Password" aria-required="true" required></input>
          <img src={error} alt="" className='error_icon'></img>
          </div>
          <p className='error'>Password cannot be empty</p>
          <button className='submit' type='submit' onClick={trialSubmit}>Claim your free trial</button>
          <p className="p_terms">By clicking the button, you are agreeing to our <span className="span_terms">Terms and Services</span></p>
        </form>
      </div>
    )
  }
  
  export default Form