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
        if (checkBox.checked == true) {
            document.getElementById('theSquare').style.fontSize = "40px";
        } else {
            document.getElementById('theSquare').style.fontSize = "16px";
        }
    }


// const largeFontEvent = () => {
//     const checkBox = document.getElementById('customCheck2');
//     checkBox.addEventListener('click', () => {
//         document.getElementById('theSquare').style.fontSize = "40px";
//     });
// }

export {deleteThisMessage, selectedUser, radiosEvent, createMessageEvent, largeFontEvent};