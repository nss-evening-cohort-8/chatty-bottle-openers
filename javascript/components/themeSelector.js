const textPickerEvent = () => {
    const colorWell = document.getElementById('colorWell');
        const defaultColor = "#0000ff";
        colorWell.value = defaultColor;
        colorWell.addEventListener("input", updateText, false);
        colorWell.select();
};

 const updateText = (event) =>{
    let square = document.getElementById('square');
    if (square) {
      square.style.color = event.target.value;
    };
  };

  const backgroundPickerEvent = () => {
    const background = document.getElementById('bodyColor');
        const defaultColor = "#0000ff";
        background.value = defaultColor;
        background.addEventListener("input", updateBackground, false);
        background.select();
};

  const updateBackground = (event) => {
    let square = document.getElementById('theSquare');
    if (square) {
      square.style.backgroundColor = event.target.value;
    };
  };

  export{textPickerEvent, backgroundPickerEvent};