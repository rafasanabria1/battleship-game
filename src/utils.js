import { v1 as uuid } from 'uuid'
export const orientations = {
  COLUMN: 'column',
  ROW: 'row'
}
export const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const comparePosition = (positionX, positionY) => {
  return positionX.number === positionY.number && positionX.letter === positionY.letter
}

export const newShips = [
  {
    size: 5,
    orientation: orientations.ROW,
    position: null,
    hits: 0,
    selected: false,
    id: uuid()
  },
  {
    size: 5,
    orientation: orientations.ROW,
    position: null,
    hits: 0,
    selected: false,
    id: uuid()
  },
  {
    size: 4,
    orientation: orientations.ROW,
    position: null,
    hits: 0,
    selected: false,
    id: uuid()
  },
  {
    size: 4,
    orientation: orientations.ROW,
    position: null,
    hits: 0,
    selected: false,
    id: uuid()
  },
  {
    size: 3,
    orientation: orientations.ROW,
    position: null,
    hits: 0,
    selected: false,
    id: uuid()
  },
  {
    size: 2,
    orientation: orientations.ROW,
    position: null,
    hits: 0,
    selected: false,
    id: uuid()
  }
]
