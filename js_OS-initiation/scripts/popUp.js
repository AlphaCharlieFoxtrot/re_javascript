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
    let popupBackground =document.querySelector(".popupBackground")
    btnPartage.addEventListener("click", () => {
        afficherPopUp()
    })

    popupBackground.addEventListener("click", (event) => {
        if(event.target === popupBackground){
            cacherPopUp()
        }
    })
}