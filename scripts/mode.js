const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const h2 = document.querySelector("#heading");


modeButton.addEventListener("click", () => {
    if (modeButton.innerHTML.includes('<i class="fas fa-moon"></i>')) {
        main.style.background = "#000";
        heading.style.color = "#fff";
		modeButton.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        main.style.background = "#eee";
		heading.style.color = "#000";
		modeButton.innerHTML = '<i class="fas fa-moon"></i>';
    }
});
