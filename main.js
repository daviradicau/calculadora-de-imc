const errorPopup = document.querySelector("#error-popup")
const popupWrapper = document.querySelector(".popup-wrapper")
const popup = document.querySelector("#popup")
const popupImc = document.querySelector("#popup h1")

function errorMessage(message) {
    errorPopup.innerHTML = message
    errorPopup.classList.add("roll")
    setTimeout(() => {
        errorPopup.classList.remove('roll')
    }, 2000)
}

function closeIMC() {
    popupWrapper.classList.add("hide")
}

function calcIMC(e) {
    e.preventDefault()
    let weight = Number(document.querySelector("#weight").value)
    let height = Number(document.querySelector("#height").value)
    if (weight != 0 && height != 0) {
        let imc = (weight / (height ** 2)).toFixed(2)
        popupImc.innerHTML = `Seu imc é de ${imc}`
        popupWrapper.classList.remove("hide")
        document.querySelector("#weight").value = ""
        document.querySelector("#height").value = ""
    } else {
        errorMessage("Campos não preenchidos")
    }
}