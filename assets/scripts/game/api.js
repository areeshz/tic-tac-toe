'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const createGame = () => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (index, over) => {
  const player = store.game.player1Move ? 'x' : 'o'
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: player
        },
        over: over
      }
    }
  })
}

const getGames = (over) => {
  over = over === undefined ? '' : '?over=' + over
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games' + over,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getGames
}
