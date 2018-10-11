import {printToDom} from '../helpers/util.js';
import {deleteThisMessage} from '../helpers/events.js';

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
        domString += `<div id="${message.id} class="message container p-4">`;
        domString +=    `<div class="container d-flex row pt-3 ml-3">`;
        domString +=        `<p class="msg">${message.username}:  ${message.message}</p>`;
        domString +=        `<button type="button" class="chat-btn delete-button ml-2">Delete</button>`;
        domString +=        `<button type="button" class="chat-btn edit-button ml-2">Edit</button>`;
        domString +=     `</div>`;
        domString +=        `<p class="msg-timestamp font-weight-light">${message.timestamp}</p>`;
        domString += `</div>`;
    })
    printToDom(domString, 'theSquare');
    deleteThisMessage();
};


export {chatDataBuilder, setChatData, getChatDataz};