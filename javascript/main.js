import {getChatData} from './data/chatData.js';
import {radiosEvent, createMessageEvent} from './helpers/events.js'

const initializeApp = () => {
    getChatData();
    createMessageEvent();
    radiosEvent();
};

initializeApp();