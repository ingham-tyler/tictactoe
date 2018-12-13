var currentPlayer, winner, numTurns
var tiles = []

function start() {
    currentPlayer = 'X'
    numTurns = '0'
    winner = false

    for (var i = 0; i < 9; i++) {
        tiles.push(document.querySelector('#t-' + i))
    }

    for(var i = 0; i < tiles.length; i++) {
        tiles[i].children[0].classList.add('hidden')
        tiles[i].children[1].classList.add('hidden')
    }
}

function placePiece(id) {
    var tile = document.getElementById(id)
    if (tile.children[0].classList.contains('hidden') && tile.children[1].classList.contains('hidden')) {
        if (currentPlayer === 'X') {
            tile.children[0].classList.remove('hidden')
            currentPlayer = 'O'
        } else {
            tile.children[1].classList.remove('hidden')
            currentPlayer = 'X'
        }
    }
    getCurrentPlayer()
    numTurns++
    checkForWinner()
    if (winner) {
        for (var i = 0; i < tiles.length; i++) {
            tiles[i].classList.add('end-game')
        }
        document.querySelector('.winner').classList.remove('hidden')
        document.querySelector('.game-info').classList.add('hidden')
    }
}

function getCurrentPlayer() {
    document.querySelector('.player').textContent = currentPlayer
}

function checkForWinner() {
    if (!(tiles[0].children[0].classList.contains('hidden'))
    && !(tiles[3].children[0].classList.contains('hidden'))
    && !(tiles[6].children[0].classList.contains('hidden')) ||
    !(tiles[1].children[0].classList.contains('hidden'))
    && !(tiles[4].children[0].classList.contains('hidden'))
    && !(tiles[7].children[0].classList.contains('hidden')) ||
    !(tiles[2].children[0].classList.contains('hidden'))
    && !(tiles[5].children[0].classList.contains('hidden'))
    && !(tiles[8].children[0].classList.contains('hidden'))) {  // Horizontal X
        winner = true
        document.querySelector('.winning-player').textContent = 'Player X'
    } else if (!(tiles[0].children[1].classList.contains('hidden'))
    && !(tiles[3].children[1].classList.contains('hidden'))
    && !(tiles[6].children[1].classList.contains('hidden')) ||
    !(tiles[1].children[1].classList.contains('hidden'))
    && !(tiles[4].children[1].classList.contains('hidden'))
    && !(tiles[7].children[1].classList.contains('hidden')) ||
    !(tiles[2].children[1].classList.contains('hidden'))
    && !(tiles[5].children[1].classList.contains('hidden'))
    && !(tiles[8].children[1].classList.contains('hidden'))) {  // Horizontal O
        winner = true
        document.querySelector('.winning-player').textContent = 'Player O'
    } else if (!(tiles[0].children[0].classList.contains('hidden'))
    && !(tiles[1].children[0].classList.contains('hidden'))
    && !(tiles[2].children[0].classList.contains('hidden')) ||
    !(tiles[3].children[0].classList.contains('hidden'))
    && !(tiles[4].children[0].classList.contains('hidden'))
    && !(tiles[5].children[0].classList.contains('hidden')) ||
    !(tiles[6].children[0].classList.contains('hidden'))
    && !(tiles[7].children[0].classList.contains('hidden'))
    && !(tiles[8].children[0].classList.contains('hidden'))) {// Vertial X
        winner = true
        document.querySelector('.winning-player').textContent = 'Player X'
    } else if (!(tiles[0].children[1].classList.contains('hidden'))
    && !(tiles[1].children[1].classList.contains('hidden'))
    && !(tiles[2].children[1].classList.contains('hidden')) ||
    !(tiles[3].children[1].classList.contains('hidden'))
    && !(tiles[4].children[1].classList.contains('hidden'))
    && !(tiles[5].children[1].classList.contains('hidden')) ||
    !(tiles[6].children[1].classList.contains('hidden'))
    && !(tiles[7].children[1].classList.contains('hidden'))
    && !(tiles[8].children[1].classList.contains('hidden'))) {  // Vertical O
        winner = true
        document.querySelector('.winning-player').textContent = 'Player O'
    } else if (!(tiles[0].children[0].classList.contains('hidden'))
    && !(tiles[4].children[0].classList.contains('hidden'))
    && !(tiles[8].children[0].classList.contains('hidden')) ||
    !(tiles[2].children[0].classList.contains('hidden'))
    && !(tiles[4].children[0].classList.contains('hidden'))
    && !(tiles[6].children[0].classList.contains('hidden'))) {  // Diagonal X
        winner = true
        document.querySelector('.winning-player').textContent = 'Player X'
    } else if (!(tiles[0].children[1].classList.contains('hidden'))
    && !(tiles[4].children[1].classList.contains('hidden'))
    && !(tiles[8].children[1].classList.contains('hidden')) ||
    !(tiles[2].children[1].classList.contains('hidden'))
    && !(tiles[4].children[1].classList.contains('hidden'))
    && !(tiles[6].children[1].classList.contains('hidden'))) {  // Diagonal O
        winner = true
        document.querySelector('.winning-player').textContent = 'Player O'
    } else if (numTurns >= 9) {
        winner = true
        document.querySelector('.winning-player').textContent = 'Cat\'s Game'
    }
}

start()
getCurrentPlayer()
