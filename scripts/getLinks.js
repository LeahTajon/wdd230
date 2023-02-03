const linksUrl = 'https://raw.githubusercontent.com/LeahTajon/wdd230/main/links.json';

const listUl = document.querySelector('#weekly-links');

async function getWeeklyLinks() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    displayLinks(data.links);
}

function displayLinks(data) {
    data.forEach(link => {
        let liWeek01 = document.createElement('li');
        liWeek01.innerHTML = `<span>Week 1: </span>
        <a href=${link["week01"][0]}>Holy Grail</a>
        <a href=${link["week01"][1]}>Media Query</a>
        <a href=${link["week01"][2]}>Applied JavaScript</a>
        `;

        let liWeek02 = document.createElement('li');
        liWeek02.innerHTML = `<span>Week 2: </span>
        <a href=${link["week02"][0]}>Responsive Menu</a>
        <a href=${link["week02"][1]}>BOM</a>
        `;
        
        let liWeek03 = document.createElement('li');
        liWeek03.innerHTML = `<span>Week 3: </span>
        <a href=${link["week03"][0]}>WebP</a>
        <a href=${link["week03"][1]}>Lazy Load</a>
        <a href=${link["week03"][2]}>Responsive Images</a>
        <a href=${link["week03"][3]}>localStorage</a>
        `;

        let liWeek04 = document.createElement('li');
        liWeek04.innerHTML = `<span>Week 4: </span>
        <a href=${link["week04"][0]}>Pseudo Classes</a>
        <a href=${link["week04"][1]}>CSS Combinators</a>
        <a href=${link["week04"][2]}>HTML Table</a>
        <a href=${link["week04"][3]}>HTML Forms</a>
        `;

        let liWeek05 = document.createElement('li');
        liWeek05.innerHTML = `<span>Week 5: </span>
        <a href=${link["week05"][0]}>Pseudo Elements</a>
        <a href=${link["week05"][1]}>JSON</a>
        <a href=${link["week05"][2]}>LDS Prophets</a>
        <a href=${link["week05"][3]}>OpenWeather API</a>
        `;
        
        listUl.appendChild(liWeek01);
        listUl.appendChild(liWeek02);
        listUl.appendChild(liWeek03);
        listUl.appendChild(liWeek04);
        listUl.appendChild(liWeek05);
        
       
   
    
       


       
       
       

    });
}

getWeeklyLinks()