import {getChatData} from './data/chatData.js';
import {hideAlert} from './components/theSquareComponent.js'
import {textPickerEvent, backgroundPickerEvent} from './components/themeSelector.js'
import {radiosEvent, largeFontEvent, highContrastEvent, clearButtonfunction, eventHandeler} from './helpers/events.js'


const initializeApp = () => {
    hideAlert();
    getChatData();
    radiosEvent();
    largeFontEvent();
    highContrastEvent();
    clearButtonfunction();
    textPickerEvent();
    backgroundPickerEvent();
    eventHandeler(); 
}
initializeApp();