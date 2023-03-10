import { initializeApp, getApps } from 'firebase/app'
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBQjsOrespJAWiGzOB4UirwL9yTIY0UrUk',
  authDomain: 'battleship-game-rafasanabria1.firebaseapp.com',
  projectId: 'battleship-game-rafasanabria1',
  storageBucket: 'battleship-game-rafasanabria1.appspot.com',
  messagingSenderId: '125565310842',
  appId: '1:125565310842:web:336bab0e74bb7e63bde8c3',
  measurementId: 'G-VGNG7FZ0XJ'
}

!getApps().length && initializeApp(firebaseConfig)

const auth = getAuth()

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid
  }
}

export const onAuthStateChanged = (onChange) => {
  return auth.onAuthStateChanged((user) => {
    const userMapped = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(userMapped)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new GithubAuthProvider()
  signInWithPopup(auth, githubProvider).catch(error => console.log(error))
}

export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider()
  signInWithPopup(auth, googleProvider).catch(error => console.log(error))
}

export const logout = () => {
  signOut(auth).catch(error => console.log(error))
}
