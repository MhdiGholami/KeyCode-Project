// keyCode Project
// ********************


// Dom Elements Selection
let bodyElem = document.querySelector('body')
let row1Elem = document.querySelector('.row1')
let row2Elem = document.querySelector('.row2')
let row3Elem = document.querySelector('.row3')
let row4Elem = document.querySelector('.row4')

// Set Data When Keydown happened
bodyElem.addEventListener('keydown', function (event) {
    row1Elem.innerHTML = `
        <h4>Key: ${event.key}</h4>
    `
    row1Elem.classList.add('style-items')
    row2Elem.innerHTML = `
        <h4>Location: ${event.location}</h4>
    `
    row2Elem.classList.add('style-items')
    row3Elem.innerHTML = `
        <h4>Which: ${event.which}</h4>
    `
    row3Elem.classList.add('style-items')
    row4Elem.innerHTML = `
        <h4>Code: ${event.code}</h4>
    `
    row4Elem.classList.add('style-items')
})






