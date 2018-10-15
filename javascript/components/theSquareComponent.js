import {printToDom} from '../helpers/util.js';
import {getChatBotData} from '../data/chatBot.js'
import {deleteThisMessage, selectedUser, clearButtonfunction, editThisMessage, messageLimit} from '../helpers/events.js';

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
let chatBotMessage = []
const chatBotFires = () => {
    const messages = document.getElementsByClassName('msg');
    for (let i = 0; i < messages.length; i++) {
    if (messages[i].innerHTML === "their geting rid of school holiday" ) {
        chatBotMessage.push(chatBotArray[1])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "Fuck you cartman" ) {
        chatBotMessage.push(chatBotArray[2])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "go home cartman" ) {
        chatBotMessage.push(chatBotArray[3])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "I don't have do what you tell me" ) {
        chatBotMessage.push(chatBotArray[4])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "what do you think Ed" ) {
        chatBotMessage.push(chatBotArray[5])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "what do you think ed" ) {
        chatBotMessage.push(chatBotArray[6])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "whats on your mind Ed" ) {
        chatBotMessage.push(chatBotArray[8])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "what food do you like ed" ) {
        chatBotMessage.push(chatBotArray[7])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "doing my homework" ) {
        chatBotMessage.push(chatBotArray[9])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "timmys dad whats your job" ) {
        chatBotMessage.push(chatBotArray[10])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "something went wrong" ) {
        chatBotMessage.push(chatBotArray[11])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "e = mc^2" ) {
        chatBotMessage.push(chatBotArray[12])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "are you a yoshi" ) {
        chatBotMessage.push(chatBotArray[13])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "pokemon" ) {
        chatBotMessage.push(chatBotArray[14])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "help me" ) {
        chatBotMessage.push(chatBotArray[15])
        chatDataBuilder(chatBotMessage);
    }
    else if (messages[i].innerHTML === "I'll friend you on myspace" ) {
        chatBotMessage.push(chatBotArray[16])
        chatDataBuilder(chatBotMessage);
    }
}}
let chatbotData = [];

const setChatbotData = (newArray) => {
    chatbotData = newArray;
};

const getChatbotDataz = () => {
    return chatbotData;
};

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
        domString += `<div id="${message.id}" class="message container">`;
        domString +=    `<div class="container d-flex row pt-3 ml-3">`;
        domString +=        `<p class="blue">${message.username}: </p>`;
        domString +=        `<p class=" ml-1 msg"> ${message.message}</p>`;
        domString +=        `<button type="button" class="chat-btn delete-button ml-2"><span>&nbsp;Delete&nbsp;</span></button>`;
        domString +=        `<button type="button" class="chat-btn edit-button ml-2"><span>&nbsp;&nbsp;Edit&nbsp;&nbsp;</span></button>`;
        domString +=        (message.timestamp === "") ? `<p class="msg-timestamp ml-4 font-weight-light">${moment().format('MMMM Do YYYY, h:mm:ss a')}</p>`: `<p class="msg-timestamp ml-4 font-weight-light">${message.timestamp}</p>` 
        domString +=    `</div>`;
        domString += `</div>`;
    });
    printToDom(domString, 'theSquare');
    chatBotFires();
    deleteThisMessage();
    editThisMessage();
    messageLimit();
};


export {chatDataBuilder, setChatData, getChatDataz, buildMessageArray, textInput, newMessageArray, hideAlert, clearButtonfunction, getChatbotDataz, setChatbotData, chatBotFires};
