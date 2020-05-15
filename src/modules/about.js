const mainDocument = document.querySelector('#container');
const infoContainer = document.createElement('div');

const aboutUs = () => {  
    infoContainer.classList.add('info-container');

    const information = document.createElement('div');
    information.classList.add('info');

    const title = document.createElement('h4');
    const paragraph = document.createElement('p');

    title.textContent = 'What do we do? ';

    paragraph.textContent = `Cup, grounds, espresso organic blue mountain, rich flavour, id est wings frappuccino coffee.
        Decaffeinated froth irish chicory acerbic and espresso variety.`;

    information.appendChild(title);
    information.appendChild(paragraph);
    infoContainer.appendChild(information);
    mainDocument.appendChild(infoContainer);
};

const cleanAboutUs = () => {
    infoContainer.innerHTML = null;
    mainDocument.appendChild(infoContainer);
}

export { aboutUs, cleanAboutUs };