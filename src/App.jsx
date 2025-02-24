import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import User_Dashboard from './components/user/user_dashboard/User_Dashboard'
import Item from './components/user/item/Item'


const App = () => {
  return (
      <>
          <Router>

            <Routes>
              <Route path='/' element={<User_Dashboard/>}/>
              <Route path='/item' element={<Item/>}/>
            </Routes>
          </Router>
      </>
  )
}

export default App
