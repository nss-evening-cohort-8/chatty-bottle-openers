import {buildMessageObject} from '../components/theSquareComponent.js'

let selectedUser = '';

const radiosEvent = () => {
    const radios = document.getElementsByClassName("radio");
    for (let i = 0; i < radios.length; i++) {
        radios[i].onclick = () => {
           selectedUser = radios[i].value;
           console.log(selectedUser);
        }
    }
};

const createMessageEvent = () => {
  textInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
          buildMessageObject();
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


export {deleteThisMessage, selectedUser, radiosEvent, createMessageEvent};

