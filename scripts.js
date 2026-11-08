/* Add your JavaScript to this file */

function displayMessage(){
    const form = document.querySelector('form');

    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        const message = document.querySelector('.message');
        const formInput = new FormData(form);
        const data = Object.fromEntries(formInput.entries());
        const email = data.email.trim();

        if (email !== ''){
            message.innerHTML = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }else{
            message.innerHTML = "Please enter a valid email address.";
        }
    })
}

window.onload = function(){
    displayMessage();
}