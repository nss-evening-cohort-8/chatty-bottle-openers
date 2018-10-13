import {buildMessageArray, chatDataBuilder, textInput, newMessageArray} from '../components/theSquareComponent.js'

let selectedUser = '';

const deleteAll = () => {
    const messages = document.getElementById("theSquare")
    messages.innerHTML = ""
};

const clearButtonfunction = () => {
    const clearButton = document.getElementById("clearAll-button");
    clearButton.addEventListener("click", deleteAll);
};

const radiosEvent = () => {
    const radios = document.getElementsByClassName("radio");
    for (let i = 0; i < radios.length; i++) {
        radios[i].onclick = () => {
           selectedUser = radios[i].value
        };
    };
};

const createMessageEvent = () => {
  textInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
          buildMessageArray();
          chatDataBuilder(newMessageArray);
          textInput.value = '';
      };
  });
};  

const deleteThisMessage = () => {
    const deleteButtons = document.getElementsByClassName('delete-button');
    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener("click", (e) => {
            const buttonIClicked = e.target;
            const messageToDelete = buttonIClicked.parentNode.parentNode;
            messageToDelete.remove();
      });
    };
  };

let messageIWantToChange;
const input = document.getElementById('textInput');

const editThisMessage = () => {
    const editButtons = document.getElementsByClassName('edit-button');
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener("click", (e) => {
            input.focus(); 
            messageIWantToChange = e.currentTarget.parentNode.childNodes[1];
            input.value = messageIWantToChange.innerHTML;
        })
    };

};

const changeMessage = () => {
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            messageIWantToChange.innerHTML = input.value;
        };
    });
};

const largeFontEvent = () => {
    const checkBox = document.getElementById('customCheck2');
    checkBox.addEventListener('click', () => {
        document.getElementById('theSquare').classList.toggle('giant-size');
    });
};

const highContrastEvent = () => {
    const checkBox = document.getElementById('customCheck1');
    checkBox.addEventListener('click', () => {
        document.getElementById('body').classList.toggle('hcb');
        document.getElementById('navbar').classList.toggle('hcb');
        document.getElementById('main').classList.toggle('hcb');
        document.getElementById('users').classList.toggle('hcb');
        document.getElementById('theSquare').classList.toggle('hcb');
        document.getElementById('head').classList.toggle('hcb');
        document.getElementById('square').classList.toggle('hcb');
        document.getElementById('sqhead').classList.toggle('hcb');
    });
};

const hideAlertEvent = () => {
    const okButton = document.getElementById('ok');
    const alert = document.getElementById("alert");
    okButton.addEventListener('click', () => {
        alert.style.display = 'none';
    });
};

const messageLimit = () => {
    let counter = 0;
    const messages = document.getElementsByClassName("message");
    for (let i = 0; i < messages.length; i++) {
        counter++;
        if (counter > 10) {
            messages.item(0).remove();
        };
    };
};

export {deleteThisMessage, selectedUser, radiosEvent, createMessageEvent, largeFontEvent, hideAlertEvent, highContrastEvent, clearButtonfunction, editThisMessage, changeMessage, messageLimit};