const linksUrl = 'https://raw.githubusercontent.com/LeahTajon/wdd230/main/links.json';

//const listUl = document.querySelector('#weekly-links');

const myLinks = document.querySelector('.my-links');

async function getWeeklyLinks() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    console.log(data);
    displayLinks(data.links);
}

function displayLinks(data) {
    data.forEach(link => {
        const p = document.createElement('p');
        
        p.textContent = `${link.week01}`;
        myLinks.appendChild(p);

    });
}

getWeeklyLinks()