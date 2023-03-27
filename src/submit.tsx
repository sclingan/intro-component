export default function submitTrial(e : React.ChangeEvent<HTMLElement>) {
    e.preventDefault();
    const fname : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[id="first_name"]');
    const lname : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[id="last_name"]');
    const email : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[id="email_address"]');
    const password : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[id="password"]');
    const inputs = [fname, lname, email, password];
    
    // check that all values are not empty or null
    if(fname != null) {
        console.log(fname.value);
    }

     
  
    // check that email is valid
}