const container = document.querySelector('.grid-container');
const grid = document.querySelector('.grid');
const clearBtn = document.querySelector('button')
const borderBtn = document.querySelector('#border')
const input = document.querySelector('input')
const rainbowBtn = document.querySelector('#rainbow')
const grayScaleBtn = document.querySelector('#grayscale')

createGrid(16)

input.addEventListener('change', () => {
    clearGrid()
    createGrid(input.value)
})


// creates a grid 
function createGrid(size) {
    for (let index = 0; index < size * size; index++) {
        let div = document.createElement('div')
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
        grid.appendChild(div).className = 'div'
    }

    // changes color of grid when hovered
    let squares = document.querySelectorAll('.div')
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            let randomColor = `rgb(${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)})`
            square.style.backgroundColor = randomColor
        })
    })
}

// clears grid 
function clearGrid() {
    let squares = document.querySelectorAll('.div')
    squares.forEach(square => {
        square.style.backgroundColor = '#fff'
    })
}

rainbowBtn.addEventListener('click', () => {
    let randomColor = `rgb(${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)})`
    square.style.backgroundColor = randomColor
})





// clears grid area when button is clicked
clearBtn.addEventListener('click', () => {
    clearGrid()
})

// toggles grid border
borderBtn.addEventListener('click', () => {
    let squares = document.querySelectorAll('.div')
    squares.forEach(square => {
        square.classList.toggle('border')
    })
})



