import {printToDom} from '../helpers/util.js';
import {deleteThisMessage, selectedUser} from '../helpers/events.js';

const textInput = document.getElementById("textInput");
const alert = document.getElementById("alert")

let newMessageArray = [];

let newChatObject = 
    { 
    id: 0,
    username: "",
    message: "",
    timestamp: ""
    };

const buildMessageArray = () => {
    newMessageArray = []
    if (selectedUser === "") {
        alert.style.display = 'block';
    } else {
    const newId = newChatObject.id + 1
    const inputValue = textInput.value
    newChatObject.id = newId;
    newChatObject.username = selectedUser;
    newChatObject.message = inputValue;
    newMessageArray.push(newChatObject);
    }
}

const hideAlert = () => {
    alert.style.display = 'none';
}



let chatData = [];


const deleteAll = () => {
    newChatObject = [];
    chatData = [];
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
    domString += `<div id="${message.id}" class="message container">`;
    domString +=    `<div class="container d-flex row pt-3 ml-3">`;
    domString +=        `<p class="blue">${message.username}: </p>`;
    domString +=        `<p class=" ml-1 msg"> ${message.message}</p>`;
    domString +=        `<button type="button" class="chat-btn delete-button ml-2">Delete</button>`;
    domString +=        `<button type="button" class="chat-btn edit-button ml-2">Edit</button>`;
    domString +=        `<p class="msg-timestamp ml-4 font-weight-light">${message.timestamp}</p>`;
    domString +=    `</div>`;
    domString += `</div>`;
    })
    printToDom(domString, 'theSquare');
    deleteThisMessage();
    };


export {chatDataBuilder, setChatData, getChatDataz, buildMessageArray, textInput, newMessageArray, hideAlert};