import {printToDom} from '../helpers/util.js';

let newChatData = [];

let chatData = [];

const setChatData = (newArray) => {
    chatData = newArray;
};

const getChatDataz = () => {
    return chatData;
};

const buildNewChatArray = () => {
    const inputValue = document.getElementById("input").value
    const radios = document.getElementsByClassName("radio")
    for(let i = 0; i < radios.length; i++) {
        if (radio[i].checked){
            console.log(radio[i].value)
        // var selector = 'label[for=' + radios[i].id + ']';
        // var label = document.querySelector(selector);
        // const username = label.innerHTML;
        // return username
    }
}

const chatDataBuilder = (chatDataArray) => {
    let domString = '';
    chatDataArray.forEach((message) => {
        domString += `<div class="message">`;
        domString +=        `<p class="msg-username">${message.username}</p>`;
        domString +=        `<p class="msg-text">${message.message}</p>`;
        domString +=        `<p class="msg-timestamp">${message.timestamp}</p>`;
        domString += `</div>`;
    })
    printToDom(domString, 'theSquare');
};


export {chatDataBuilder, setChatData, getChatDataz};