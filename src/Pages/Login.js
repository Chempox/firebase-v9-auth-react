import { useCallback } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { signInWithGoogle } from '../Pages/firebase'
import { BsGoogle } from 'react-icons/bs';
import './Login.css'

export const Login = () => {
  const handleSubmit = useCallback(async e => {
    e.preventDefault()

    const { email, password } = e.target.elements
    const auth = getAuth()
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
    } catch (e) {
      alert(e.message)
    }
  }, [])

  return (
    <div className='login-wrapper'>
		<div className='login-main'>
			<h1 id='login-title'>Login</h1>
			<form onSubmit={handleSubmit}>
			<div className='login-buttons'>
				<input name="email" placeholder="email" type="email" />
				<input name="password" placeholder="password" type="password" />
				<button type="submit">Login</button>
				<a href='/signup'><h5>SignUp</h5></a>
			</div>
			</form>
			<button id='googleLogin' onClick={signInWithGoogle}><BsGoogle/></button>
		</div>
    </div> 
  )
}
