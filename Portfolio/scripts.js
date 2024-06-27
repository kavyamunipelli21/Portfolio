document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Example: Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display thank you message
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you! We will reach out to you soon.';
        thankYouMessage.style.textAlign = 'center'; // Center-align the message
        form.appendChild(thankYouMessage);

        // Optionally, reset the form after submission
        // form.reset();
    });
});
