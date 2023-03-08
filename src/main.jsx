import React from 'react'
import ReactDOM from 'react-dom/client'
import { Board } from './components/Board'
import { Layout } from './components/Layout'
import BattleShipContextProvider from './contexts/BattleShipContextProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <BattleShipContextProvider>
        <Board />
      </BattleShipContextProvider>
    </Layout>
  </React.StrictMode>
)
