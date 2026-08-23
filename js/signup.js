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

        const mobileNumber = document.getElementById("signupMobile").value;

        // 🔴 PLACEHOLDER: Ensure these keys match the backend MongoDB schema
        const payload = {
            fullName: document.getElementById("signupName").value,
            email: document.getElementById("signupEmail").value,
            mobile: mobileNumber,
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
            await registerUser(payload);
            
            // MVP HACK: Save the mobile number to localStorage to mark them as logged in
            localStorage.setItem('citizen_id', mobileNumber);
            
            alert("✅ Account created successfully!\n\nYour address details have been saved to your profile for faster grievance filing.");
            window.location.href = "index.html"; // Send them straight to the portal!

        } catch (error) {
            errorBox.innerText = error.message;
            errorBox.classList.remove("hidden");
            
            submitBtn.innerHTML = `Sign Up`;
            submitBtn.disabled = false;
            submitBtn.classList.remove("opacity-75", "cursor-not-allowed");
        }
    });
});