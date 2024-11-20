// Switch Tabs (Sign-Up/Sign-In) Logic
const signUpTab = document.getElementById("signUpTab");
const loginTab = document.getElementById("loginTab");
const signUpForm = document.getElementById("signUpForm");

signUpTab.addEventListener("click", () => {
  signUpTab.classList.add("active");
  loginTab.classList.remove("active");
  signUpForm.classList.remove("hidden");
});
