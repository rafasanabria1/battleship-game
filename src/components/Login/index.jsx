import GithubSVG from '../../assets/GithubSVG'
import GoogleSVG from '../../assets/GoogleSVG'
import { loginWithGithub, loginWithGoogle } from '../../firebase/client'
import './index.css'

export const Login = () => {
  const handleLoginGoogle = () => {
    console.log('login google')
    loginWithGoogle()
  }

  const handleLoginGithub = () => {
    console.log('login github')
    loginWithGithub()
  }

  return (
    <div className='login-container'>
      <div className='login-botonera'>
        <div className='login-boton' onClick={handleLoginGoogle}>
          <GoogleSVG className='icon' />
          <span>Inicia sesión con Google</span>
        </div>
        <div className='login-boton' onClick={handleLoginGithub}>
          <GithubSVG className='icon' />
          <span>Inicia sesión con Github</span>
        </div>
      </div>
    </div>
  )
}
