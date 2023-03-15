const keys = document.querySelector('.board')
keys.addEventListener("click", event => {
    // get id of event target
    const {target} = event 
    const {id} = target
    console.log(id)
    if (keys.textContent) {
        return
    } else {
        board.select(id)
    }
})

const board = {
    turn: '1',
    
    select(id) {
        document.getElementById(id).style.backgroundColor = '#f47a3b'
    }
}