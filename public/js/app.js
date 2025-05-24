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



    // Event listener for the login form
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const isCreateAccount = e.submitter && e.submitter.textContent === 'Create Account';
            if (isCreateAccount) {
                showSection(registerSection);
            } else {
                console.log('Logging in...');
                showSection(dashboardSection);
            }
        });
    }

    // Event listener for the registration form
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            console.log('Registering user:', { name, email, password });

            showSection(dashboardSection);
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

