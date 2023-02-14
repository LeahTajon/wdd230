const requestUrl = "https://raw.githubusercontent.com/LeahTajon/wdd230/main/members.json";

const cards = document.querySelector('.cards');

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
        const businessContact = document.createElement('p')

        const logo = document.createElement('img');
        const name = document.createElement('h2');
        const memberLevel = document.createElement('h4');
        const desc = document.createElement('p');
        const address = document.createElement('h3');
        const phone = document.createElement('span')
        const website = document.createElement('span')


        logo.setAttribute('src', business.companyImage);
        logo.setAttribute('alt', `${business.name} Logo`);
        logo.setAttribute('loading', 'lazy');

        name.textContent = `${business.name}`;
        desc.textContent = `${business.description}`;
        address.innerHTML = `${business.address}`;
        phone.innerHTML = `<i class="fa-solid fa-phone"></i>  ${business.phoneNumber}`;
        website.innerHTML = `<a href=${business.websiteUrl} target='_blank'>Visit Website</a>`

        memberLevel.textContent = `${business.membershipLevel}`;
        if (memberLevel.textContent === 'bronze') {
            memberLevel.style.backgroundColor = '#D2B48C';
            memberLevel.style.color = '#333';
        } else if (memberLevel.textContent === 'silver') {
            memberLevel.style.backgroundColor = '#C0C0C0';
            memberLevel.style.color = '#333';
        } else if (memberLevel.textContent === 'gold') {
            memberLevel.style.backgroundColor = '#FFD700';
            memberLevel.style.color = '#333';
        } else if (memberLevel.textContent === 'nonprofit') {
            memberLevel.style.backgroundColor = '#9EC1CC';
            memberLevel.style.color = '#333';
        }

        businessContact.appendChild(phone);
        businessContact.appendChild(website);

        businessInfo.appendChild(name)
        businessInfo.appendChild(address);
        businessInfo.appendChild(memberLevel);
        businessInfo.appendChild(desc);
        businessInfo.appendChild(businessContact);
        
        businessImage.appendChild(logo);

        section.appendChild(businessImage);
        section.appendChild(businessInfo);

        cards.appendChild(section);
       
    });
}


fetchDirectory();