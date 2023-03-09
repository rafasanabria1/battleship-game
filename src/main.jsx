import React from 'react'
import ReactDOM from 'react-dom/client'
import { Board } from './components/Board'
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { Toast } from './components/Toast'
import BattleShipContextProvider from './contexts/BattleShipContextProvider'
import ToastContextProvider from './contexts/ToastContextProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <BattleShipContextProvider>
        <ToastContextProvider>
          <Toast position='top-left' autoDelete autoDeleteTime={10000} />
          <Header />
          <Board />
        </ToastContextProvider>
      </BattleShipContextProvider>
    </Layout>
  </React.StrictMode>
)
