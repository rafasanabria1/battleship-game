import { Board } from './components/Board'
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { Login } from './components/Login'
import { Toast } from './components/Toast'
import BattleShipContextProvider from './contexts/BattleShipContextProvider'
import ToastContextProvider from './contexts/ToastContextProvider'
import useUser, { USER_STATES } from './hooks/useUser'

function App () {
  const user = useUser()

  return (
    <Layout>
      <BattleShipContextProvider>
        <ToastContextProvider>
          <Toast position='top-left' autoDelete autoDeleteTime={10000} />
          <Header />
          {
            user === USER_STATES.NOT_KNOWN && <div>Cargando... </div>
          }
          {
            user === USER_STATES.NOT_LOGGED && <Login />
          }
          {
            user && <Board />
          }
        </ToastContextProvider>
      </BattleShipContextProvider>
    </Layout>
  )
}

export default App
