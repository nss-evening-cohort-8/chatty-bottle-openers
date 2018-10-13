import {getChatData} from './data/chatData.js';
import {radiosEvent, createMessageEvent, largeFontEvent, hideAlertEvent} from './helpers/events.js'
import {hideAlert} from './components/theSquareComponent.js'

const initializeApp = () => {
    hideAlert();
    getChatData();
    createMessageEvent();
    radiosEvent();
    largeFontEvent();
    hideAlertEvent();
}
initializeApp();