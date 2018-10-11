import {printToDom} from '../helpers/util.js';
import {clearButtonFunction} from '../helpers'
import {deleteThisMessage} from '../helpers/events.js';

let chatData = [];
let newChatData = [];

const deleteAll = () => {
    newChatData = []
}

const clearButtonfunction = () => {
    const clearButton = document.getElementById(clearAll-button);
    clearButton.addEventListener("click", deleteAll);
};


const setChatData = (newArray) => {
    chatData = newArray;
};

const getChatDataz = () => {
    return chatData;
};

const chatDataBuilder = (chatDataArray) => {
    let domString = '';
    chatDataArray.forEach((message) => {
        domString += `<div id="${message.id} class="message container p-3">`;
        domString +=    `<div class="container d-flex row">`;
        domString +=        `<p class="msg">${message.username}:  ${message.message}</p>`;
        domString +=        `<button type="button" class="delete-button btn btn-sm btn-danger ml-4">Delete</button>`;
        domString +=        `<button type="button" class="btn btn-sm btn-warning ml-2">Edit</button>`;
        domString +=     `</div>`;
        domString +=        `<p class="msg-timestamp font-weight-light">${message.timestamp}</p>`;
        domString += `</div>`;
    })
    printToDom(domString, 'theSquare');
    deleteThisMessage();
};


export {chatDataBuilder, setChatData, getChatDataz};