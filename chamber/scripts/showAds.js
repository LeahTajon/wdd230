const memberUrl = "https://raw.githubusercontent.com/LeahTajon/wdd230/main/members.json";

const adsDiv = document.querySelector('.member-ads');

async function fetchAds() {
    const response = await fetch(memberUrl);
    const data = await response.json();
    //console.log(data["businesses"]);
    getBusiness(data["businesses"]);
}

function getBusiness(data) {
    const businessArr = [];
    data.map((business) => {
        const businessName = business["name"];
        const businessLevel = business["membershipLevel"];
        const businessAds = business["ads"];
        
        if (businessLevel === 'silver' || businessLevel === 'gold') {
            const businessObj = {}

            businessObj["name"] = businessName;
            businessObj["level"] = businessLevel;
            businessObj["ads"] = businessAds;    
            
            businessArr.push(businessObj); 
        }       
    })
    
    const idx1 = generateRandomNumber(businessArr.length);
    const idx2 = generateRandomNumber(businessArr.length);

    if (idx1 !== idx2) {
        const sectionBusiness1 = document.createElement('section');
        const adsBusiness1 = document.createElement('img');
        const sectionBusiness2 = document.createElement('section');
        const adsBusiness2 = document.createElement('img');

        const adsSrc1 = businessArr[idx1].ads;
        adsBusiness1.setAttribute('src', adsSrc1);
        adsBusiness1.setAttribute('alt', `Ad of ${businessArr[idx1].name}`);
        adsBusiness1.setAttribute('loading','lazy');

        const adsSrc2 = businessArr[idx2].ads;
        adsBusiness2.setAttribute('src', adsSrc2);
        adsBusiness2.setAttribute('alt', `Ad of ${businessArr[idx2].name}`);
        adsBusiness2.setAttribute('loading','lazy');

        sectionBusiness1.appendChild(adsBusiness1);
        sectionBusiness2.appendChild(adsBusiness2);
        adsDiv.appendChild(sectionBusiness1);
        adsDiv.appendChild(sectionBusiness2);
    }
    
}

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

fetchAds();



