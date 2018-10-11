
const hoverButtonEvent = (buttonId) => {
    const button = document.getElementById(buttonId);
    button.addEventListener("hover", () => {
        
    })
}

const largeFontEvent = () => {
    const checkBox = document.getElementById('customCheck2');
    checkBox.addEventListener('click', () => {
        document.getElementById('theSquare').style.fontSize = "40px";
    });
}

export {largeFontEvent};