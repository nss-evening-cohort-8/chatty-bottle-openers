import {chatDataBuilder, setChatData, getChatDataz} from '../components/theSquareComponent.js';

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setChatData(data.chatMessages);
    chatDataBuilder(getChatDataz());
  }
  
  function executeThisCodeIfXhrFails () {
    console.log('shit broke');
  }
  
  const getChatData = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/chatData.json');
    myRequest.send();
  };
  
  export {getChatData};