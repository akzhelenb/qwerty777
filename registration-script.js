// Simple form validation and Google Sheets integration script

// Function to validate form data
function validateForm(form) {
    const name = form.name.value;
    const email = form.email.value;
    
    if (!name || !email) {
        alert("Name and Email are required.");
        return false;
    }
    
    // Basic email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return false;
    }
    
    return true;
}

// Function to submit data to Google Sheets
function submitToGoogleSheets(form) {
    const url = "YOUR_GOOGLE_SHEETS_WEB_APP_URL"; // Replace with your Google Sheets Web App URL

    const data = {
        name: form.name.value,
        email: form.email.value
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        alert("Data submitted successfully!");
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error submitting your data.");
    });
}

// Main function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    if (validateForm(form)) {
        submitToGoogleSheets(form);
    }
}

// Assign handle submit to form
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    form.addEventListener("submit", handleSubmit);
});
