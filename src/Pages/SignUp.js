import { useCallback } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import './Login.css'
export const SignUp = () => {
  const handleSubmit = useCallback(async e => {
    e.preventDefault()

    const { email, password } = e.target.elements
    const auth = getAuth()
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value)
    } catch (e) {
      alert(e.message)
    }
  }, [])

  return (
    <div className='login-wrapper'>
		<div className='login-main'>
			<h1 id='login-title'>SignUp</h1>
			<form onSubmit={handleSubmit}>
			<div className='login-buttons'>
				<input name="email" placeholder="email" type="email" />
				<input name="password" placeholder="password" type="password" />
				<button type="submit">SignUp</button>
				<a href='/login'><h5>Login</h5></a>
			</div>
			</form>
		</div>
    </div> 
  )
}
