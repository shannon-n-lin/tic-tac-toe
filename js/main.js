const keys = document.querySelector('.board')
keys.addEventListener("click", event => {
    // get id of event target
    const {target} = event 
    const {id} = target
    const selected = document.getElementById(id)
    board.addValue(id, selected)
})

const board = {
    turn: '1',
    values: {},

    addValue(id, selected) {
        // check if id already has a value
        if (this.values[id]) {
            return
        } else {
            // for player 1, add value of X
            if (this.turn % 2 === 1) {
                this.values[id] = 'X'
                console.log(`${id}: ${this.values[id]}`)
                this.mark(id, selected)
            // for player 2, add value of O
            } else {
                this.values[id] = 'O'
                console.log(`${id}: ${this.values[id]}`)
                this.mark(id, selected)
            }
        }
    },

    markSquare(id, selected) {
        // player 1 marks square with X
        if (this.turn % 2 === 1) {
            selected.textContent = 'X'
            selected.style.backgroundColor = '#f47a3b'
            selected.style.color = '#f3b2ce'
        } // player 2 marks square with O
          else {
            selected.textContent = 'O'
            selected.style.backgroundColor = '#f3b2ce'
            selected.style.color = '#f47a3b'
        }
        this.turn++
        this.checkWin()
    },

    checkWin() {
        // check horizontal
        for (let i = 1; i <= 7; i += 3) {
            if (this.values[i] && this.values[i] === this.values[i+1] && this.values[i] === this.values[i+2]) {
                document.querySelector('.results').innerText = 'winner!'
            }  
        }
        // check vertical
        for (let i = 1; i <= 3; i++) {
            if (this.values[i] && this.values[i] === this.values[i+3] && this.values[i] === this.values[i+6]) {
                document.querySelector('.results').innerText = 'winner!'
            }  
        }
        // check top-left to bottom-right diagonal
        if (this.values[1] && this.values[1] === this.values[5] && this.values[1] === this.values[9]) {
            document.querySelector('.results').innerText = 'winner!'
        // check top-right to bottom-left diagonal
        } else if (this.values[3] && this.values[3] === this.values[5] && this.values[3] === this.values[7]) {
            document.querySelector('.results').innerText = 'winner!'
        }
    },
}