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

const hoverButtonEvent = (buttonId) => {
    const button = document.getElementById(buttonId);
    button.addEventListener("hover", () => {
        
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
      })
    }
  };


export {deleteThisMessage};
export {deleteThisMessage, selectedUser, radiosEvent, createMessageEvent};

