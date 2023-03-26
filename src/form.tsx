function Form() {

    return (
      <div className="form">
        <form>
          {/* <label htmlFor='firstName'>First Name</label> */}
          <input id='firstName' type='text' placeholder="First Name"></input>
          {/* <label htmlFor='lastName'>Last Name</label> */}
          <input id='lastName' type='text' placeholder="Last Name"></input>
          {/* <label htmlFor='Email'>Email Address</label> */}
          <input id='Email' type='email' placeholder="Email Address" required></input>
          {/* <label htmlFor='Password'>Password</label> */}
          <input id='Password' type='password' placeholder="Password" required></input>

          {/* change this to a submit button? */}
          {/* <a>Claim your free trial</a> */}
          <button className='submit' type='submit'>Claim your free trial</button>
          <p className="p_terms">By clicking the button, you are agreeing to our <span className="span_terms">Terms and Services</span></p>
        </form>
      </div>
    )
  }
  
  export default Form