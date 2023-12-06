document.addEventListener('DOMContentLoaded', function() {
    // Handle feedback form submission
    var feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var feedback = document.getElementById('feedback').value;

        // Simple validation and feedback logic 
        if (name && email && feedback) {
            console.log('Feedback Submitted:', { name: name, email: email, feedback: feedback });
            alert('Thank you for your feedback!');
            feedbackForm.reset(); // Reset the form after submission
        } else {
            alert('Please fill out all fields.');
        }
    });
});
