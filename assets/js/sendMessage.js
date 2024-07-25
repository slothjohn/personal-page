
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var email = document.getElementById('email').value;
        var name = document.getElementById('name').value;
        var message = document.getElementById('message').value;

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert('Invalid email format');
            return;
        }
        
        if (name.trim() === '' || message.trim() === '') {
            alert('Name and message are required');
            return;
        }

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                alert('Message sent successfully!');
            }, function(error) {
                alert('Failed to send message.');
            });
    });
}
