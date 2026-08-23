// js/signup.js

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault(); 
        
        const submitBtn = document.getElementById("signupSubmitBtn");
        const errorBox = document.getElementById("signupError");
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("signupConfirmPassword").value;

        // Client-side validation for password matching
        if (password !== confirmPassword) {
            errorBox.innerText = "Passwords do not match!";
            errorBox.classList.remove("hidden");
            return;
        }

        // Set UI to loading state
        submitBtn.innerHTML = `Creating Account...`;
        submitBtn.disabled = true;
        submitBtn.classList.add("opacity-75", "cursor-not-allowed");
        errorBox.classList.add("hidden");

        // 🔴 PLACEHOLDER: Ensure these keys match the exact schema your backend team created in MongoDB
        const payload = {
            fullName: document.getElementById("signupName").value,
            email: document.getElementById("signupEmail").value,
            mobile: document.getElementById("signupMobile").value,
            address: {
                flat: document.getElementById("signupFlat").value,
                street: document.getElementById("signupStreet").value,
                landmark: document.getElementById("signupLandmark").value,
                pincode: document.getElementById("signupPincode").value,
                ward: document.getElementById("signupWard").value
            },
            password: password
        };

        try {
            // Send to backend via api.js
            const response = await registerUser(payload);
            
            alert("✅ Account created successfully!\n\nYour address details have been saved to your profile for faster grievance filing.");
            window.location.href = "login.html";

        } catch (error) {
            // Show error to user (e.g. "Mobile number already exists")
            errorBox.innerText = error.message;
            errorBox.classList.remove("hidden");
            
            // Reset button
            submitBtn.innerHTML = `Sign Up`;
            submitBtn.disabled = false;
            submitBtn.classList.remove("opacity-75", "cursor-not-allowed");
        }
    });
});