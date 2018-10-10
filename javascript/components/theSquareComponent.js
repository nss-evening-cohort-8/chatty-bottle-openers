import {printToDom} from '../helpers/util.js';

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
        domString += `<div class="message container p-3">`;
        domString +=    `<div class="container d-flex row">`;
        domString +=        `<p class="msg-username">${message.username}: </p>`;
        domString +=        `<p class="msg-text border rounded bg-primary p-1 text-white">${message.message}</p>`;
        domString +=     `</div>`
;        domString +=        `<p class="msg-timestamp font-weight-light">${message.timestamp}</p>`;
        domString += `</div>`;
    })
    printToDom(domString, 'theSquare');
};

export {chatDataBuilder, setChatData, getChatDataz};