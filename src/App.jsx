import React from 'react'
import Home from './pages/home/Home'
import SignUp from './components/authentication/signup/SignUp'
import SignIn from './components/authentication/signin/SignIn'

const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <SignUp/>
      <SignIn/>
    </div>
  )
}

export default App
