// ==========================================
// API CONFIGURATION
// ==========================================
// 🔴 PLACEHOLDER: Replace this with the Render URL from your backend team
const BASE_URL = "https://REPLACE_WITH_RENDER_URL.com/api"; 

// ==========================================
// AUTHENTICATION API CALLS
// ==========================================

async function loginUser(credentials) {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Login failed. Please check your credentials.');
        }
        return data;
    } catch (error) {
        console.error("Login Error:", error);
        throw error;
    }
}

async function registerUser(userData) {
    try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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
// GRIEVANCE API CALLS
// ==========================================

async function submitGrievance(grievanceData) {
    try {
        const response = await fetch(`${BASE_URL}/complaints`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(grievanceData)
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to submit grievance.');
        }
        return data;
    } catch (error) {
        console.error("Submission Error:", error);
        throw error;
    }
}