const mainDocument = document.querySelector('#container');
const infoContainer = document.createElement('div');

const menu = () => {
    infoContainer.classList.add('info-container');

    const information = document.createElement('div');
    information.classList.add('info');

    const title = document.createElement('h4');
    title.textContent = 'Our menu has'

    const paragraph = document.createElement('p');

    paragraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, justo eu ultrices mattis,
    justo arcu placerat lorem, vitae tempor tortor augue at libero. Sed sollicitudin enim laoreet urna
    suscipit fermentum.
    Sed odio ex, ornare at condimentum id, interdum id lacus. Quisque non leo nec velit feugiat
    sagittis.
    Praesent finibus diam ut purus eleifend rhoncus. Quisque pretium ligula in vehicula fringilla.
    Fusce porttitor arcu tellus, ut congue eros facilisis quis. Aenean blandit in tortor in congue.
    Donec tempus, felis et tempus rhoncus, dolor dolor sagittis sapien, nec lacinia lacus massa id urna.`;

    information.appendChild(title);
    information.appendChild(paragraph);
    infoContainer.appendChild(information);
    mainDocument.appendChild(infoContainer);
};

const cleanDoc = () => {
    infoContainer.innerHTML = null;
    mainDocument.appendChild(infoContainer);
}

export { menu , cleanDoc };