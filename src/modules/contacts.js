const mainDocument = document.querySelector('#container');
const infoContainer = document.createElement('div');

const contact = () => {  
    infoContainer.classList.add('info-container');

    const information = document.createElement('div');
    information.classList.add('info');

    const title = document.createElement('h4');
    const paragraph = document.createElement('p');

    title.textContent = 'Contact us at: ';

    paragraph.innerHTML = `<form action="#">
                            <label for="name">First name:</label><br>
                            <input type="text" id="fname" name="name" value="Your Name" onfocus="this.value = ''"><br>
                            <label for="email">email:</label><br>
                            <input type="email" id="email" name="email" value="youremail@email.com" onfocus="this.value = ''"><br><br>
                            <label for="msg">message:</label><br>
                            <textarea name="msg" rows="2" cols="20" onfocus="this.value = ''">Message here...</textarea><br><br>
                            <input type="submit" value="Submit">
         </form> `;

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