import {getChatData} from './data/chatData.js';
import {hideAlert} from './components/theSquareComponent.js'
import {radiosEvent, createMessageEvent, largeFontEvent, highContrastEvent, hideAlertEvent, clearButtonfunction, changeMessage} from './helpers/events.js'

const initializeApp = () => {
    hideAlert();
    getChatData();
    radiosEvent();
    largeFontEvent();
    hideAlertEvent();
    highContrastEvent();
    clearButtonfunction();
    changeMessage();
    createMessageEvent();
}
initializeApp();