
function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setChatBotData(data.chatMessages);
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