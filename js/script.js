document.addEventListener("DOMContentLoaded", function() {
    // Get the form element by its id
    const signupForm = document.getElementById("signupForm");

    // Add a submit event listener to the form
    signupForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Display an alert message to the user
        alert("Current server not available");
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Get the login form by its id
    const loginForm = document.getElementById("loginForm");

    // Add a submit event listener to the form
    loginForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Display a custom message when the user clicks the login button
        alert("Login is currently not available. Please try again later.");
    });
});
