import {getChatData} from './data/chatData.js';
import {hideAlert} from './components/theSquareComponent.js'
import {radiosEvent, createMessageEvent, largeFontEvent, highContrastEvent, hideAlertEvent} from './helpers/events.js'

const initializeApp = () => {
    hideAlert();
    getChatData();
    createMessageEvent();
    radiosEvent();
    largeFontEvent();
    hideAlertEvent();
    highContrastEvent();
    changeBackgroundEvent();
}
initializeApp();