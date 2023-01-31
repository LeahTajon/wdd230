const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.prophets.length);
    displayProphets(data.prophets);
}


const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement('section')
        const fullName = document.createElement('h2');
        const birthDate = document.createElement('p');
        const placeOfBirth = document.createElement('p');
        const portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`



        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440')

        
        card.appendChild(portrait);
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(placeOfBirth);

        
        

        cards.appendChild(card);
    });
}
getProphetData(url);