// Skeleton for the JavaScript file to handle user interactions and communicate with the backend

document.addEventListener('DOMContentLoaded', () => {
    // References to sections
    const registerSection = document.getElementById('register-section');
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');

    // References to forms
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const placesForm = document.getElementById('places-form');

    // Reference to the places list
    const placesList = document.getElementById('places-list');

    // Initially show the login section
    showSection(loginSection);
    // showSection(registerSection);
    // showSection(dashboardSection);

    // Function to show a specific section and hide others
    function showSection(sectionToShow) {
        const sections = [registerSection, loginSection, dashboardSection];

        sections.forEach((section) => {
            if (section === sectionToShow) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    }  
    
    // Clicking 'Create Account' brings up registration form
    const createAccountBtn = document.getElementById('create-account-btn');
    if (createAccountBtn) {
        createAccountBtn.addEventListener('click', () => {
            showSection(registerSection)
        });
    }



if (loginForm) { // Check if login for exists on page
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check if button clicked was 'Create Accont'
        const isCreateAccount = e.submitter && e.submitter.textContent === 'Create Account';

    if (isCreateAccount) {
        showSection(registerSection); // Show registration section if 'Create Account' clicked
    } else {
        const email = document.getElementById('email-login').value;
        const password = document.getElementById('password-login').value;

        try {
            // Send POST request to backend
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ email, password }) // Convert data to json
            });
            const data = await response.json(); // Parse json response

            if (response.ok) { // If response is 200 (success)
                alert(data.msg);
                showSection(dashboardSection); // Show dashboard section
            } else {
                alert(data.msg || 'Login failed');
            }
        } catch (err) {
            alert('Error connecting to server');
        }
    }
    });
}

const API_BASE = 'http://localhost:5000'

if (registerForm) { // Check if registration form exists on page
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Send POST requet to backend
            const response = await fetch(`${API_BASE}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }) // Convert data to json
            });
            const data = await response.json(); // Parse json response

            if (response.ok) { // If response is 201 (created)
                alert(data.msg);
                showSection(dashboardSection); // Show dashboard section
            } else {
                alert(data.msg || 'Registration failed');
            }
        } catch (err) {
            alert('Error connecting to server');
        }
    });
}

    // Event listener for the places form
    if (placesForm) {
        placesForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const placeName = document.getElementById('place-name').value;
            const category = document.getElementById('category').value;
            const address = document.getElementById('address').value;

            // Create a new list item
            const listItem = document.createElement('li');
            listItem.textContent = `${placeName} (${category}) - ${address}`;

            // Append the new place to the list
            placesList.appendChild(listItem);

            // Clear the form
            placesForm.reset();
        });
    }

    // Function to load user's places
    function loadPlaces() {
        // Add logic to fetch and display places
        // Example: Populate the places list with dummy data or data from the backend
    }

    // Call loadPlaces if placesList exists
    if (placesList) {
        loadPlaces();
    }

});




