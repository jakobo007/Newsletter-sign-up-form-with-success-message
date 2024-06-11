const form = document.getElementById('email_form')
const Email = document.getElementById('email')
const errorMsg = document.querySelector('.error_msg')
const successMsg = document.querySelector('.success-card')
const submitBtn = document.getElementById('submit_btn')
const dismissBtn =  document.getElementById('dismiss_btn')
const successMsgEmail = successMsg.querySelector('span')

form.addEventListener('submit', function(e) {
    //prevent default submit behaviour
    e.preventDefault();

    let valid = true

    //check email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(Email.value)){
        errorMsg.style.display = 'block';
        Email.style.borderColor = 'var(--Tomato)';
        valid = false;
    } else {
        errorMsg.style.display = 'none';
    }

    if (valid) {
        successMsgEmail.textContent = Email.value;
        document.querySelector('.card').style.display = 'none';
        successMsg.style.display = 'block';
    }
});

dismissBtn.addEventListener('click', function() {
    successMsg.style.display = 'none';
    document.querySelector('.card').style.display = 'flex';
    email.value = '';
});