const urlLinks = 'https://github.com/LeahTajon/wdd230/blob/main/links.json';

const unOrdered = document.querySelector('ul');

// async function getWeeklyList(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     //console.log(data);
//     displayLinks(data);
// }

fetch(urlLinks)
    .then(response => response.json())
    .then(data => {
        displayLinks(data)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

const displayLinks = (data) => {
    data.forEach(link => {
        const listElement = document.createElement('li');
        
        listElement.innerHTML = `<a href=${link.week01}>Links</a>`

        unOrdered.appendChild(listElement);
    })
}

