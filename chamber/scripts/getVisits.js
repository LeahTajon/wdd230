const todayDisplay = document.querySelector('.today');
const visitsDisplay = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    visitsDisplay.textContent = `${numVisits} visits`;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
todayDisplay.textContent = `${new Date().getDay()} days`;
