const printToDom = (stringToPrint, selectedDiv) => {
  document.getElementById(selectedDiv).innerHTML = stringToPrint;
};

export { printToDom }