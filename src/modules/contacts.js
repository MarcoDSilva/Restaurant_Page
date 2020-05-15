const mainDocument = document.querySelector('#container');
const infoContainer = document.createElement('div');

const contact = () => {  
    infoContainer.classList.add('info-container');

    const information = document.createElement('div');
    information.classList.add('info');

    const title = document.createElement('h4');
    const paragraph = document.createElement('p');

    title.textContent = 'contact us at: ';

    paragraph.textContent = `Call us at 911 911 9111
    twitterino at - 
    fbrino at -
    ig at - `;

    information.appendChild(title);
    information.appendChild(paragraph);
    infoContainer.appendChild(information);
    mainDocument.appendChild(infoContainer);
};

const cleanContact = () => {
    infoContainer.innerHTML = null;
    mainDocument.appendChild(infoContainer);
}

export { contact, cleanContact };