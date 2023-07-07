const newsletter_btn = document.querySelector('.newsletter-btn');
const email_input = document.querySelector('.email-input');
const error_message = document.querySelector('.error-message');
const newsletter_container = document.querySelector('.newsletter-container');
const subscribing_container = document.querySelector('.subscribing-container');
const dismiss_btn = document.querySelector('.subscriber-dismiss-btn');
const subscriber_email = document.querySelector('.subscriber-email');

newsletter_btn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    const emailInputValue = email_input.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailInputValue === '') {
        showError('Email address is empty');
        email_input.classList.add('invalid-input');
    } else if (!emailRegex.test(emailInputValue)) {
        showError('Invalid email');
        email_input.classList.add('invalid-input');
    } else {
        hideError();
        email_input.classList.remove('invalid-input');
        subscriber_email.textContent = emailInputValue;
        newsletter_container.style.display = 'none';
        subscribing_container.style.display = 'block';
    }
});

dismiss_btn.addEventListener('click', function (event) {
    event.preventDefault();
    email_input.classList.remove('invalid-input');
    newsletter_container.style.display = 'flex';
    subscribing_container.style.display = 'none';
});

function showError(message) {
    error_message.textContent = message;
    error_message.style.display = 'inline-block';
}

function hideError() {
    error_message.textContent = '';
    error_message.style.display = 'none';
}

