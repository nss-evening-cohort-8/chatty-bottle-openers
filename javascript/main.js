import {getChatData} from './data/chatData.js';
<<<<<<< HEAD
import {largeFontEvent} from './helpers/events.js'

const initializeApp = () => {
    getChatData();
    largeFontEvent();
=======
import {radiosEvent, createMessageEvent} from './helpers/events.js'

const initializeApp = () => {
    getChatData();
    createMessageEvent();
    radiosEvent();
>>>>>>> master
};

initializeApp();