
const footer = document.querySelector('footer');
const lastModified = document.createElement('p');

lastModified.innerHTML = `Last modified: ${document.lastModified}`;
footer.appendChild(lastModified);