function afficherPopUp() {
    let popupBackground = document.querySelector(".popupBackground")

    
    popupBackground.classList.add("active")
}

function cacherPopUp() {
    let popupBackground = document.querySelector(".popupBackground")


    popupBackground.classList.remove("active")
}

function initAddEventListenerPopup() {
    let btnPartage = document.querySelector(".zonePartage button")
    let popUpBackground =document.querySelector(".popUpBackground")
    btnPartage.addEventListener("click", () => {
        afficherPopUp()
    })

    popUpBackground.addEventListener("click", (event) => {
        if(event.target === popUpBackground){
            cacherPopUp()
        }
    })
}