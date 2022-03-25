import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from './firebase'
import Builder from '../Components/Builder'
import './Wizard.css'
export const Wizard = () => {
  const { user } = useAuthState()

  return (
    <div className='mainWizard'>
      <h1>Welcome {user?.email}</h1>
      <button onClick={() => signOut(getAuth())}>Sign out</button>
      <div>
        <Builder/>
      </div>
    </div>
  )
}
