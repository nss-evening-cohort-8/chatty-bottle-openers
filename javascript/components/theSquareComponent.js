import {printToDom} from '../helpers/util.js';
import {radiosEvent} from '../helpers/events';

let newChatData = [
    { 
    id: "",
    username: "",
    message: "",
    timestamp: ""
    }
];

let counter = 6
const inputValue = document.getElementById("input").value

const buildMessageObject = () => {
    newChatData.id += `message${counter}`
    newChatData.username += 
    newChatData.message += document.getElementById.value;
}
    


let chatData = [];

const setChatData = (newArray) => {
    chatData = newArray;
};

const getChatDataz = () => {
    return chatData;
};


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




