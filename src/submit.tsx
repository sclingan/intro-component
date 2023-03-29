export default function submitTrial(e : React.ChangeEvent<HTMLElement>) {
    e.preventDefault();
    const fname : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[id="first_name"]');
    const lname : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[id="last_name"]');
    const email : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[id="email_address"]');
    const password : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[id="password"]');
    const inputs = [fname, lname, email, password];

    
    // check that all values are not empty or null
  
    inputs.forEach(element =>  {
        if(element.value === '') {
            const id = document.getElementById('p_' + element.id);
            const img = document.getElementById('img_' + element.id);
            img.classList.remove('sr-hidden');
            id.classList.remove('sr-hidden');
            img.classList.add('error_icon');
            id.classList.add('error');
        }
    })









    // if empty change class to error
     
  
    // check that email is valid
}