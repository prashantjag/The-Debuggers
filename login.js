// Redirect Logic for Login Buttons
const loginButtons = document.querySelectorAll(".login-btn");
loginButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.getAttribute("data-type");
    if (type === "member") {
      window.location.href = "member.html";
    } else if (type === "alumni") {
      window.location.href = "alumni.html";
    } else if (type === "admin") {
      window.location.href = "admin.html";
    }
  });
});
