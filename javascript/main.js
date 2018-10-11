import {getChatData} from './data/chatData.js';
import {radiosEvent, createMessageEvent, largeFontEvent} from './helpers/events.js'

const initializeApp = () => {
    getChatData();
    createMessageEvent();
    radiosEvent();
    largeFontEvent();
}
initializeApp();