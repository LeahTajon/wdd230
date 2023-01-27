const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }))
  })

// Check PASSWORD 
const password1 = document.querySelector('.password1');
const password2 = document.querySelector('.password2');
const message = document.querySelector('.form-message');

function checkSame() {
    if (password1.value !== password2.value) {
        message.textContent = 'Password does not match! Please try again.';
        message.style.display = "block";
		password2.style.backgroundColor = "#aa3333";
		password2.style.color = "#fff";
		password2.focus();
		password2.value = "";
    } else {
        message.style.display = 'none';
        password2.style.backgroundColor = "#fff";
		password2.style.color = "#000";
    }
}

password2.addEventListener('focusout', checkSame);

function showValue(value) {
    document.getElementById("rating-value").innerHTML = value;
  }
