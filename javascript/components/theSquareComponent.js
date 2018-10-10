import {printToDom} from '../helpers/util.js';

let chatData = [];
let newChatData = [];

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