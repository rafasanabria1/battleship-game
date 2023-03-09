import React from 'react'
import ReactDOM from 'react-dom/client'
import { Board } from './components/Board'
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import BattleShipContextProvider from './contexts/BattleShipContextProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <BattleShipContextProvider>
        <Header />
        <Board />
      </BattleShipContextProvider>
    </Layout>
  </React.StrictMode>
)
