'use strict'

const allButtons = document.querySelectorAll('.p')
const oneButton = document.querySelector('.one')
const twoButton = document.querySelector('.two')
const threeButton = document.querySelector('.three')
const fourButton = document.querySelector('.four')
const fiveButton = document.querySelector('.five')
const sixButton = document.querySelector('.six')
const sevenButton = document.querySelector('.seven')
const eightButton = document.querySelector('.eight')
const nineButton = document.querySelector('.nine')
const zeroButton = document.querySelector('.zero')
const clearButton = document.querySelector('.clear')
const equalButton = document.querySelector('.equal')
const decimalButton = document.querySelector('.decimal')
const divideButton = document.querySelector('.divide')
const multipyButton = document.querySelector('.multiplication')
const subtractButton = document.querySelector('.subtract')
const addButton = document.querySelector('.add')

let outputLine = document.querySelector('.output')

for (let button of allButtons) {
    button.addEventListener('click', function () {
    outputLine.innerText += button.innerText
})
}