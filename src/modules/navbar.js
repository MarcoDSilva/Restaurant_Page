import { menu, cleanDoc } from './menu.js';
import { contact, cleanContact } from './contacts.js'
import { aboutUs, cleanAboutUs } from './about.js';

const navbar = () => {

    //variables to hold all the html
    const mainDocument = document.querySelector('#container');
    const navbar = document.createElement('navbar');
    navbar.id = 'navbar';

    const logo = document.createElement('p');
    const list = document.createElement('ul');
    list.classList.add('nav-list');

    //creating the list and respective links
    const menuElements = ['about', 'menu', 'contacts'];

    for (let el = 0; el < menuElements.length; el++) {
        let li = document.createElement('li');
        let anchor = document.createElement('a');

        anchor.innerText = `${menuElements[el]}`;
        anchor.id = `${menuElements[el]}`;
        anchor.classList.add('nav-link');
        anchor.addEventListener('click', () => {
           
            getMenuToShow(menuElements[el]);
        });
        anchor.href = '#';

        li.appendChild(anchor);
        list.appendChild(li);
    }

    logo.innerText = 'Restaurant Lorem';
    logo.classList.add('logo');

    navbar.appendChild(logo);
    navbar.appendChild(list);

    mainDocument.appendChild(navbar);
};

function getMenuToShow(element) {
    cleaner();
    switch (element) {
        case 'about':
            aboutUs();
            break;
        case 'menu':
            menu();
            break;
        case 'contacts':
            contact();
            break;
        default:
            break;
    }
    return;
}

const cleaner = () => {
    cleanContact();
    cleanDoc();
    cleanAboutUs();
}

export { navbar };