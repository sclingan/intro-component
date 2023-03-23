function Form() {

    return (
      <div className="form">
        <form>
          <label htmlFor='firstName'>First Name</label>
          <input id='firstName'></input>
          <label htmlFor='lastName'>Last Name</label>
          <input id='lastName'></input>
          <label htmlFor='Email'>Email Address</label>
          <input id='Email'></input>
          <label htmlFor='Password'>Password</label>
          <input id='Password'></input>

          {/* change this to a submit button? */}
          <a>Claim your free trial</a>
  
          <p>By clicking the button, you are agreeing to our Terms and Services</p>
        </form>
      </div>
    )
  }
  
  export default Form