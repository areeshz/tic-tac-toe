'use strict'

const store = {
  user: {},
  game: {
    player1Move: true,
    cells: ['', '', '', '', '', '', '', '', '']
  },
  // Image sources for player game pieces
  src1: 'assets/game-pieces/x.png',
  src2: 'assets/game-pieces/circle.png'
}

module.exports = store
