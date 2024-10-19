document.querySelector('a[href="#section"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#section').scrollIntoView({
        behavior: 'smooth'
    });
});
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
