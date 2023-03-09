import React from 'react'

const BattleShipContext = React.createContext({
  ships: [],
  setShips: null,
  hits: [],
  setHits: null,
  shipsFixed: false,
  setShipsFixed: null,
  selectedShip: null,
  setSelectedShip: null

})

export default BattleShipContext
