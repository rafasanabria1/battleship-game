import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Board } from './components/Board'
import { Layout } from './components/Layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Board />
    </Layout>
  </React.StrictMode>
)
