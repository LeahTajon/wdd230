const requestUrl = "https://raw.githubusercontent.com/LeahTajon/leahtajon.github.io/main/members.json";

const cards = document.querySelector('#cards');




async function fetchDirectory() {
    const response = await fetch(requestUrl);
    const data = await response.json();
    displayDirectory(data["businesses"])
}

const displayDirectory = (data) => {
    data.forEach(business => {
        const section = document.createElement('section');
        const businessImage = document.createElement('div');
        const businessInfo = document.createElement('div');

        const logo = document.createElement('img');
        const name = document.createElement('h4');



        logo.setAttribute('src', business.companyImage);

        name.textContent = `${business.name}`;

        businessInfo.appendChild(name)
        businessImage.appendChild(logo);

        section.appendChild(businessImage);
        section.appendChild(businessInfo);

        cards.appendChild(section);
       
        
    });
}


fetchDirectory();