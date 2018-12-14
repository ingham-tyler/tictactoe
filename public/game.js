var currentPlayer, humanPlayer, computerPlayer, winner, numTurns
var tiles = []

function start() {
    currentPlayer = 'X'
    humanPlayer = 'X'
    computerPlayer = 'O'
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

function checkValidMove(tileId) {
    return tiles[tileId].children[0].classList.contains('hidden') && tiles[tileId].children[1].classList.contains('hidden')
}

function placePiece(id) {
    var tile = document.getElementById(id)
    if (tile.children[0].classList.contains('hidden') && tile.children[1].classList.contains('hidden')) {
        if (currentPlayer === 'X') {
            tile.children[0].classList.remove('hidden')
        } else {
            tile.children[1].classList.remove('hidden')
        }
        numTurns++
        checkForWinner()
        if (winner) {
            for (var i = 0; i < tiles.length; i++) {
                tiles[i].classList.add('end-game')
            }
            document.querySelector('.winner').classList.remove('hidden')
            document.querySelector('.game-info').classList.add('hidden')
        } else {
            computerTurn()
            checkForWinner()
            if (winner) {
                for (var i = 0; i < tiles.length; i++) {
                    tiles[i].classList.add('end-game')
                }
                document.querySelector('.winner').classList.remove('hidden')
                document.querySelector('.game-info').classList.add('hidden')
            }
        }
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
    && !(tiles[8].children[0].classList.contains('hidden'))) {
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
    && !(tiles[8].children[1].classList.contains('hidden'))) {
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
    && !(tiles[8].children[0].classList.contains('hidden'))) {
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
    && !(tiles[8].children[1].classList.contains('hidden'))) {
        winner = true
        document.querySelector('.winning-player').textContent = 'Player O'
    } else if (!(tiles[0].children[0].classList.contains('hidden'))
    && !(tiles[4].children[0].classList.contains('hidden'))
    && !(tiles[8].children[0].classList.contains('hidden')) ||
    !(tiles[2].children[0].classList.contains('hidden'))
    && !(tiles[4].children[0].classList.contains('hidden'))
    && !(tiles[6].children[0].classList.contains('hidden'))) {
        winner = true
        document.querySelector('.winning-player').textContent = 'Player X'
    } else if (!(tiles[0].children[1].classList.contains('hidden'))
    && !(tiles[4].children[1].classList.contains('hidden'))
    && !(tiles[8].children[1].classList.contains('hidden')) ||
    !(tiles[2].children[1].classList.contains('hidden'))
    && !(tiles[4].children[1].classList.contains('hidden'))
    && !(tiles[6].children[1].classList.contains('hidden'))) {
        winner = true
        document.querySelector('.winning-player').textContent = 'Player O'
    } else if (numTurns >= 9) {
        winner = true
        document.querySelector('.winning-player').textContent = 'Cat\'s Game'
    }
}

function computerTurn() {
    var computerPiece, humanPiece
    humanPlayer === 'X' ? computerPiece = 1 : computerPiece = 0
    humanPlayer === 'X' ? humanPiece = 0 : humanPiece = 1

    // Make Winning Move
    for (var i = 0; i < tiles.length; i++) {
        if (checkValidMove(i)) {
            tiles[i].children[computerPiece].classList.remove('hidden')
            checkForWinner()
            if (winner && document.querySelector('.winning-player').textContent === 'Player ' + computerPlayer) {
                console.log('Computer is making the winning move at: ' + i)
                return
            } else {
                tiles[i].children[computerPiece].classList.add('hidden')
            }
        }
    }

    // Stop Losing Move    
    for (var i = 0; i < tiles.length; i++) {
        if (checkValidMove(i)) {
            tiles[i].children[humanPiece].classList.remove('hidden')
            checkForWinner()
            if (winner && document.querySelector('.winning-player').textContent === 'Player ' + humanPlayer) {
                winner = false
                tiles[i].children[humanPiece].classList.add('hidden')
                console.log('Computer is stoping the winning move at: ' + i)
                tiles[i].children[computerPiece].classList.remove('hidden')
                currentPlayer = humanPlayer
                numTurns++

                return
            } else {
                tiles[i].children[humanPiece].classList.add('hidden')
            }
        }
    }

    // Make Random Move
    var tile
    do {
        tile = Math.floor(Math.random() * 9)
    } while (!checkValidMove(tile))
    console.log('Computer is making a random move at: ' + tile)
    tiles[tile].children[computerPiece].classList.remove('hidden')
    currentPlayer = humanPlayer
    numTurns++
}

function replay() {
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].classList.remove('end-game')
    }
    document.querySelector('.winner').classList.add('hidden')
    document.querySelector('.game-info').classList.remove('hidden')

    start()
    getCurrentPlayer()
}

function showGame() {
    document.querySelector('.menu').classList.add('hidden')
    document.querySelector('.game-wrapper').classList.remove('hidden')
    document.querySelector('.rules').classList.add('hidden')
    document.querySelector('.about').classList.add('hidden')

    replay()
}

function showMenu() {
    document.querySelector('.menu').classList.remove('hidden')
    document.querySelector('.game-wrapper').classList.add('hidden')
    document.querySelector('.rules').classList.add('hidden')
    document.querySelector('.about').classList.add('hidden')
}

function showRules() {
    document.querySelector('.menu').classList.add('hidden')
    document.querySelector('.game-wrapper').classList.add('hidden')
    document.querySelector('.rules').classList.remove('hidden')
    document.querySelector('.about').classList.add('hidden')
}

function showAbout() {
    document.querySelector('.menu').classList.add('hidden')
    document.querySelector('.game-wrapper').classList.add('hidden')
    document.querySelector('.rules').classList.add('hidden')
    document.querySelector('.about').classList.remove('hidden')
}
