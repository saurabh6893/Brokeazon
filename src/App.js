import { Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Screen from './Components/Screen'
import More from './Routes/More'
import Signin from './Routes/Signin/Signin'
import './Screen.styles.scss'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Screen />} />
          <Route path='/more' element={<More />} />
          <Route path='/signin' element={<Signin />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
