import {printToDom} from '../helpers/util.js';
import {deleteThisMessage, selectedUser} from '../helpers/events.js';

const textInput = document.getElementById("textInput");



let newMessageArray = [];

let newChatObject = 
    { 
    id: "0",
    username: "",
    message: "",
    timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
    };

const buildMessageArray = () => {
    newMessageArray = []
    if (selectedUser === "") {
        alert("A user needs to be selected in order to add a message.")
    } else {
    const newId = parseFloat(newChatObject.id) + 1
    const inputValue = textInput.value
    newChatObject.id = newId;
    newChatObject.username = selectedUser;
    newChatObject.message = inputValue;
    newMessageArray.push(newChatObject);
    }
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
        domString += `<div id="${message.id}" class="message container p-3">`;
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


export {chatDataBuilder, setChatData, getChatDataz, buildMessageArray, textInput, newMessageArray};