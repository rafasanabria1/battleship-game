import React from 'react'

const BattleShipContext = React.createContext({
  ships: [],
  setShips: null,
  hits: [],
  setHits: null,
  shipsFixed: [],
  setShipsFixed: null
})

export default BattleShipContext
