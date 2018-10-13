import {buildMessageArray, chatDataBuilder, textInput, newMessageArray} from '../components/theSquareComponent.js'

let selectedUser = '';

const radiosEvent = () => {
    const radios = document.getElementsByClassName("radio");
    for (let i = 0; i < radios.length; i++) {
        radios[i].onclick = () => {
           selectedUser = radios[i].value
        }
    }
};

const createMessageEvent = () => {
  textInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
          buildMessageArray();
          chatDataBuilder(newMessageArray);
          textInput.value = '';
      }
  })
};  

const deleteThisMessage = () => {
    const deleteButtons = document.getElementsByClassName('delete-button');
    for (let i = 0; i < deleteButtons.length; i++) {
      const element = deleteButtons[i];
      element.addEventListener("click", (e) => {
        const buttonIClicked = e.target;
        const messageToDelete = buttonIClicked.parentNode.parentNode;
        messageToDelete.remove();
      })
    }
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
})
};

export {deleteThisMessage, selectedUser, radiosEvent, createMessageEvent, largeFontEvent, hideAlertEvent, highContrastEvent};


