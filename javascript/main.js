import {getChatData} from './data/chatData.js';
import {hideAlert} from './components/theSquareComponent.js'
import {textPickerEvent, backgroundPickerEvent} from './components/themeSelector.js'
import {radiosEvent, createMessageEvent, largeFontEvent, highContrastEvent, hideAlertEvent, clearButtonfunction, changeMessage} from './helpers/events.js'

const initializeApp = () => {
    hideAlert();
    getChatData();
    radiosEvent();
    largeFontEvent();
    hideAlertEvent();
    highContrastEvent();
    clearButtonfunction();
    textPickerEvent();
    backgroundPickerEvent();
    changeMessage();
    createMessageEvent();
}
initializeApp();