import {printToDom} from '../helpers/util.js';
import {deleteThisMessage, selectedUser} from '../helpers/events.js';

const textInput = document.getElementById("textInput");



let newMessageArray = [];

let newChatObject = 
    { 
    id: "0",
    username: "",
    message: "",
    timestamp: ""
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


export {chatDataBuilder, setChatData, getChatDataz, buildMessageArray, textInput, newMessageArray};

