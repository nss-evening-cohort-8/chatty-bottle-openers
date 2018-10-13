import {getChatData} from './data/chatData.js';
import {hideAlert} from './components/theSquareComponent.js'
import {radiosEvent, createMessageEvent, largeFontEvent, highContrastEvent, hideAlertEvent, clearButtonfunction} from './helpers/events.js'
import {textPickerEvent, backgroundPickerEvent} from './components/themeSelector.js'

const initializeApp = () => {
    hideAlert();
    getChatData();
    createMessageEvent();
    radiosEvent();
    largeFontEvent();
    hideAlertEvent();
    highContrastEvent();
    clearButtonfunction();
    textPickerEvent();
    backgroundPickerEvent();
}
initializeApp();