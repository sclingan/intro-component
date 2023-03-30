

export default function submitTrial(e : React.ChangeEvent<HTMLElement>) {
    e.preventDefault();
    const fname : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[id="first_name"]');
    const lname : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[id="last_name"]');
    const email : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[id="email_address"]');
    const password : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[id="password"]');
    const inputs = [fname, lname, password];
    let formValid : boolean= false;

    
    // check that email is valid

     const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
     let answer : boolean = regex.test(email.value);
     const error = document.getElementById('p_email_address');
     const img_error = document.getElementById('img_email_address');
     console.log(answer);

     if(answer) {
        console.log('submit');
        document.getElementById('email_address').style.color = 'black';
        error.classList.remove('error');
        img_error.classList.remove('error_icon');
        error.classList.add('sr-hidden')
        img_error.classList.add('sr-hidden');
     } else {
        document.getElementById('email_address').style.color = 'red';
        error.classList.remove('sr-hidden');
        img_error.classList.remove('sr-hidden');
        error.classList.add('error')
        img_error.classList.add('error_icon');
     }

     // check that all values are not empty or null
     
     inputs.forEach(element =>  {
         const img = document.getElementById('img_' + element.id);
         const id = document.getElementById('p_' + element.id);
         
         if(element.value === '') {
             img.classList.remove('sr-hidden');
             id.classList.remove('sr-hidden');
             img.classList.add('error_icon');
             id.classList.add('error');
            } else {
                // reset css class for re-submit
                
                img.classList.remove('error-icon')
                id.classList.remove('error');
                img.classList.add('sr-hidden');
                id.classList.add('sr-hidden');
                // formValid = true;
            }
        })
        
    }
    