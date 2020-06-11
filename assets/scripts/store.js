'use strict'

const store = {
  user: {},
  game: {
    player1Move: true,
    cells: ['', '', '', '', '', '', '', '', '']
  },
  // Image sources for player game pieces
  src1: 'public/x.png',
  src2: 'public/circle.png'
}

module.exports = store
