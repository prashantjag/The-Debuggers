// Reset Password Form Submission
const resetForm = document.getElementById("resetForm");

resetForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from actually submitting

  const email = document.getElementById("email").value;
  
  if (email) {
    // Simulate sending the reset password link
    alert(`A reset password link has been sent to ${email}`);
    resetForm.reset(); // Clear the form after submission
  } else {
    alert("Please enter a valid email address.");
  }
});
