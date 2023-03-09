import React, { useState } from 'react'
import { orientations } from '../utils'
import { v1 as uuid } from 'uuid'
import BattleShipContext from './BattleShipContext'

const BattleShipContextProvider = (props) => {
  const [shipsFixed, setShipsFixed] = useState(false)
  const [hits, setHits] = useState([])
  const [ships, setShips] = useState([
    {
      size: 5,
      orientation: orientations.ROW,
      position: null,
      hitted: [],
      selected: false,
      id: uuid()
    },
    {
      size: 5,
      orientation: orientations.ROW,
      position: null,
      hitted: [],
      selected: false,
      id: uuid()
    },
    {
      size: 4,
      orientation: orientations.ROW,
      position: null,
      hitted: [],
      selected: false,
      id: uuid()
    },
    {
      size: 4,
      orientation: orientations.ROW,
      position: null,
      hitted: [],
      selected: false,
      id: uuid()
    },
    {
      size: 3,
      orientation: orientations.ROW,
      position: null,
      hitted: [],
      selected: false,
      id: uuid()
    },
    {
      size: 2,
      orientation: orientations.ROW,
      position: null,
      hitted: [],
      selected: false,
      id: uuid()
    }
  ])
  const [selectedShip, setSelectedShip] = useState(null)

  return (
    <BattleShipContext.Provider value={{ ships, setShips, hits, setHits, shipsFixed, setShipsFixed, selectedShip, setSelectedShip }}>{props.children}</BattleShipContext.Provider>
  )
}

export default BattleShipContextProvider
