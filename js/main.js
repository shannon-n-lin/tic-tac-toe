const square = document.querySelector('div')
square.addEventListener("click", event => {
    if (square.textContent) {
        return
    } else {
        board.select()
    }
})

