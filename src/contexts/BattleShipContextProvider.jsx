import React, { useState } from 'react'
import { newShips } from '../utils'
import BattleShipContext from './BattleShipContext'

const BattleShipContextProvider = (props) => {
  const [ships, setShips] = useState(newShips)
  const [hits, setHits] = useState([])
  const [selectedShip, setSelectedShip] = useState(null)
  const [shipsFixed, setShipsFixed] = useState(false)

  const resetGame = () => {
    setShips(newShips)
    setHits([])
    setSelectedShip(null)
    setShipsFixed(false)
  }

  return (
    <BattleShipContext.Provider value={{ ships, setShips, hits, setHits, shipsFixed, setShipsFixed, selectedShip, setSelectedShip, resetGame }}>{props.children}</BattleShipContext.Provider>
  )
}

export default BattleShipContextProvider
