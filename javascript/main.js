import {getChatData} from './data/chatData.js';
import {hideAlert} from './components/theSquareComponent.js'
import {textPickerEvent, backgroundPickerEvent} from './components/themeSelector.js'
import {radiosEvent, createMessageEvent, largeFontEvent, highContrastEvent, clearButtonfunction, editCondition, eventHandeler} from './helpers/events.js'


const initializeApp = () => {
    hideAlert();
    getChatData();
    radiosEvent();
    largeFontEvent();
    highContrastEvent();
    clearButtonfunction();
    textPickerEvent();
    backgroundPickerEvent();
    editCondition();
    eventHandeler(); 
}
initializeApp();