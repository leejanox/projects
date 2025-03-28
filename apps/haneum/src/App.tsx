import {Routes,Route} from 'react-router-dom'
import HomePage from '@pages/homePage'

function App() {
  return (
    <Routes>
      <Route path='/*' element={<HomePage/>}/>
    </Routes>
  )
}

export default App
//#E8F4F5 -> 바다색