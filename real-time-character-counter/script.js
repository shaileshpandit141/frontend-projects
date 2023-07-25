const textAreaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const reaminigCounter = document.getElementById("remaining-counter")

textAreaEl.addEventListener("keyup", (event) => {
    updateCounter()
})

updateCounter()

function updateCounter() {
    totalCounterEl.innerText =  textAreaEl.value.length

    reaminigCounter.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length

}