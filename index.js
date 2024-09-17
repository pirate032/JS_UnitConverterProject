/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputNum = 0

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

btnEl.addEventListener("click", function() {
     inputNum = inputEl.value
     convert(inputNum)
})

function convert(num) {
    
    let lenMeters = num * 3.281
    let lenFeet = num / 3.281
    let lenString = `${inputEl.value} meters = ${Number(lenFeet).toFixed(3)} feet | ${inputEl.value} feet = ${Number(lenMeters).toFixed(3)} meters`
    lengthEl.textContent = lenString
    
    let volLiters = num * 0.264
    let volGallons = num / 0.264
    let volString = `${inputEl.value} liters = ${Number(volGallons).toFixed(3)} gallons | ${inputEl.value} gallons = ${Number(volLiters).toFixed(3)} liters`
    volumeEl.textContent = volString
    
    let massKilo = num * 2.204
    let massLbs = num / 2.204
    let massString = `${inputEl.value} kilos = ${Number(massLbs).toFixed(3)} pounds | ${inputEl.value} kilos = ${Number(massKilo).toFixed(3)} pounds`
    massEl.textContent = massString
}