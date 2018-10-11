import {getChatData} from './data/chatData.js';
import {largeFontEvent} from './helpers/events.js'

const initializeApp = () => {
    getChatData();
    largeFontEvent();
};

initializeApp();