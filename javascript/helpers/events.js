const radiosEvent = () => {
    const radios = document.getElementsByClassName("radio");
    for (let i = 0; i < radios.length; i++) {
        radios[i].onclick = () => {
            // console.log(radios[i].id)
            console.log(radios[i].childNodes[1].innerHTML)
        }
    }
}

export {radiosEvent}