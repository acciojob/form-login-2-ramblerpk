//your JS code here. If required.
 document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Get values from the input fields
            const firstName = document.getElementById('fname').value;
            const lastName = document.getElementById('lname').value;
            const phoneNumber = document.getElementById('phone').value;
            const email = document.getElementById('mail').value;

            // Create alert message
            const message = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail ID: ${email}`;

            // Show alert
            alert(message);
        });