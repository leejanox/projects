import RipplePage from '@pages/ripplePage'
import {Routes,Route} from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<RipplePage/>}/>
    </Routes>
  )
}

export default AppRouter