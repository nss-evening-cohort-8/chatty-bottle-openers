import {printToDom} from '../helpers/util.js';
// import {getChatBotData} from '../data/chatBot.js'
import {deleteThisMessage, selectedUser, clearButtonfunction, editThisMessage, messageLimit} from '../helpers/events.js';

const textInput = document.getElementById("textInput");
const alert = document.getElementById("alert");

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
        const newId = newChatObject.id + 1;
        const inputValue = textInput.value;
        newChatObject.id = newId;
        newChatObject.username = selectedUser;
        newChatObject.message = inputValue;
        newMessageArray.push(newChatObject);
    };
};

const hideAlert = () => {
    alert.style.display = 'none';
};
let chatbotData = [];

const setChatbotData = (newArray) => {
    chatbotData = newArray;
};

const getChatbotDataz = () => {
    return chatbotData;
};
let chatBotMessage = []
const chatBotFires = () => {
    const messages = document.getElementsByClassName('msg');
    console.log(messages[0].innerHTML)
    let counter = 0
    for (let i = 0; i < messages.length && counter < 1; i++) {
        
    if (messages[i].innerHTML === "their geting rid of school holiday" ) {
        chatBotMessage.push(chatbotData[0])
        console.log(counter);
        counter++
        console.log(counter);
        
        // return chatDataBuilder(chatBotMessage);
    }
    // else if (messages[i].innerHTML === "Fuck you cartman" ) {
    //     chatBotMessage.push(chatbotData[1])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "go home cartman" ) {
    //     chatBotMessage.push(chatbotData[2])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "I don't have do what you tell me" ) {
    //     chatBotMessage.push(chatbotData[3])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "what do you" ) {
    //     chatBotMessage.push(chatbotData[4])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "what do you think ed" ) {
    //     chatBotMessage.push(chatbotData[5])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "what food do you like ed" ) {
    //     chatBotMessage.push(chatbotData[6])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "whats on your mind Ed" ) {
    //     chatBotMessage.push(chatbotData[7])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "doing my homework" ) {
    //     chatBotMessage.push(chatbotData[8])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "timmys dad whats your job" ) {
    //     chatBotMessage.push(chatbotData[9])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "something went wrong" ) {
    //     chatBotMessage.push(chatbotData[10])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "this" ) {
    //     chatBotMessage.push(chatbotData[11])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "are you a yoshi" ) {
    //     chatBotMessage.push(chatbotData[12])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "pokemon" ) {
    //     chatBotMessage.push(chatbotData[13])
    //     return chatDataBuilder(chatBotMessage);
    // }
    // else if (messages[i].innerHTML === "help me" ) {
    //     console.log("hi")
    // chatBotMessage.push(chatbotData[14])  
    //     return chatDataBuilder(chatBotMessage); 
    // }
    // else if (messages[i].innerHTML === "I'll friend you on myspace" ) {
    //     chatBotMessage.push(chatbotData[15])
    //     return chatDataBuilder(chatBotMessage);
    // }
    else {
        console.log("it failed.")
    }
    return chatBotMessage;
    // else if (messages[i].innerHTML == chatbotData())
    //     return chatDataBuilder(chatMessage);
    // }
}}


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
        domString +=        `<p class=" ml-1 msg">${message.message}</p>`;
        domString +=        `<button type="button" class="chat-btn delete-button ml-2"><span>&nbsp;Delete&nbsp;</span></button>`;
        domString +=        `<button type="button" class="chat-btn edit-button ml-2"><span>&nbsp;&nbsp;Edit&nbsp;&nbsp;</span></button>`;
        domString +=        (message.timestamp === "") ? `<p class="msg-timestamp ml-4 font-weight-light">${moment().format('MMMM Do YYYY, h:mm:ss a')}</p>`: `<p class="msg-timestamp ml-4 font-weight-light">${message.timestamp}</p>`; 
        domString +=    `</div>`;
        domString += `</div>`;
    });
    printToDom(domString, 'theSquare');
    
    deleteThisMessage();
    editThisMessage();
    messageLimit();
    
};
chatBotFires(chatDataBuilder());

export {chatDataBuilder, setChatData, getChatDataz, buildMessageArray, textInput, newMessageArray, hideAlert, clearButtonfunction, getChatbotDataz, setChatbotData};
