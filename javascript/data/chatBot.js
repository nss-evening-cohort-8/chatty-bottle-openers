import {getChatbotDataz, setChatbotData} from "../components/theSquareComponent.js"
function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setChatbotData(data.ChatBot);
    
  }
  
  function executeThisCodeIfXhrFails () {
    console.log('shit broke');
  }
  
  const getChatBotData = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/chatBotData.json');
    myRequest.send();
  };
  
  export {getChatBotData};