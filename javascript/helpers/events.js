
const hoverButtonEvent = (buttonId) => {
    const button = document.getElementById(buttonId);
    button.addEventListener("hover", () => {
        
    })
}

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
        document.getElementById('theSquare').style.fontSize = "40px";
    });
}

export {deleteThisMessage, largeFontEvent};

