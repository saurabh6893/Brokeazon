import { Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Screen from './Components/Screen'
import More from './Routes/More'

import './Screen.styles.scss'
import Authentication from './Routes/Authentication/Authentication'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Screen />} />
          <Route path='/more' element={<More />} />
          <Route path='/auth' element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
