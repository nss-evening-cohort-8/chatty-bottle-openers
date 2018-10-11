import {getChatData} from './data/chatData.js';
import {radiosEvent} from './helpers/events.js'

const initializeApp = () => {
    getChatData();
    radiosEvent();
};

initializeApp();