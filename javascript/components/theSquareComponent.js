import {printToDom} from '../helpers/util.js';

// // let newChatData = [];

// const buildNewChatArray = () => {
//     // const inputValue = document.getElementById("input").value
//     const radios = document.getElementsByTagName('input');
//     for(let i = 0; i < radios.length; i++) {
//         if (radios[i].type === 'radio' && radios[i].checked){
//             console.log(radios[i].id);
//     }
// }};


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
        domString +=        `<p class="msg-text border rounded bg-primary p-1 ml-2 text-white">${message.message}</p>`;
        domString +=     `</div>`
;        domString +=        `<p class="msg-timestamp font-weight-light">${message.timestamp}</p>`;
        domString += `</div>`;
    })
    printToDom(domString, 'theSquare');
};



export {chatDataBuilder, setChatData, getChatDataz};


