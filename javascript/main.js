import {getChatData} from './data/chatData.js';
import {radiosEvent, createMessageEvent, largeFontEvent, highContrastEvent} from './helpers/events.js'

const initializeApp = () => {
    getChatData();
    createMessageEvent();
    radiosEvent();
    largeFontEvent();
    highContrastEvent();
}
initializeApp();