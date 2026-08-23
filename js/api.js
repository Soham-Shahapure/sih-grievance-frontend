// ==========================================
// API CONFIGURATION
// ==========================================
// 🔴 PLACEHOLDER 1: Replace this with the Render URL from your backend team
const BASE_URL = "https://REPLACE_WITH_RENDER_URL.com/api"; 


// ==========================================
// AUTHENTICATION API CALLS
// ==========================================

/**
 * 1. Logs in a citizen user
 * @param {Object} credentials - The login payload (e.g., { identifier, password })
 */
async function loginUser(credentials) {
    try {
        // 🔴 PLACEHOLDER 2: Replace '/auth/login' with actual endpoint path if different
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        const data = await response.json();

        // If backend returns an error status (like 401 or 400)
        if (!response.ok) {
            throw new Error(data.message || 'Login failed. Please check your credentials.');
        }

        return data;
    } catch (error) {
        console.error("Login Error:", error);
        throw error; // Passes the error back to the HTML file to show in the UI
    }
}

/**
 * 2. Registers a new citizen user
 * @param {Object} userData - The signup payload (e.g., { name, phone, password })
 */
async function registerUser(userData) {
    try {
        // 🔴 PLACEHOLDER 3: Replace '/auth/register' with actual endpoint path if different
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Registration failed. Please try again.');
        }

        return data;
    } catch (error) {
        console.error("Registration Error:", error);
        throw error;
    }
}


// ==========================================
// SECURE API CALLS (For App Usage)
// ==========================================

/**
 * 3. Generic fetch wrapper that automatically attaches the JWT token
 * Use this when submitting a grievance or fetching user details!
 */
async function fetchWithAuth(endpoint, method = 'GET', body = null) {
    // Grab the token from storage
    const token = localStorage.getItem('citizen_jwt');
    
    const headers = {
        'Content-Type': 'application/json'
    };
    
    // If user is logged in, attach the VIP wristband (JWT)
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    // Configure the request
    const config = { method: method, headers: headers };
    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);
        const data = await response.json();

        // Security check: If the token is expired or invalid
        if (response.status === 401) {
            console.warn("Session expired. Logging out.");
            localStorage.removeItem('citizen_jwt'); // Clear bad token
            window.location.href = "login.html"; // Kick back to login
            throw new Error("Session expired. Please log in again.");
        }

        if (!response.ok) {
            throw new Error(data.message || 'API request failed');
        }

        return data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}