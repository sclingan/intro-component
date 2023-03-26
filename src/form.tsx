function Form() {

    return (
      <div className="form">
        <form>
          {/* <label htmlFor='firstName'>First Name</label> */}
          <input id='firstName' placeholder="First Name"></input>
          {/* <label htmlFor='lastName'>Last Name</label> */}
          <input id='lastName' placeholder="Last Name"></input>
          {/* <label htmlFor='Email'>Email Address</label> */}
          <input id='Email' placeholder="Email Address"></input>
          {/* <label htmlFor='Password'>Password</label> */}
          <input id='Password' placeholder="Password"></input>

          {/* change this to a submit button? */}
          {/* <a>Claim your free trial</a> */}
          <button className='submit' type='submit'>Claim your free trial</button>
          <p className="p_terms">By clicking the button, you are agreeing to our <span className="span_terms">Terms and Services</span></p>
        </form>
      </div>
    )
  }
  
  export default Form