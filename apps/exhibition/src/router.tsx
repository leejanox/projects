import RipplePage2 from '@pages/ripplePage2'
import {Routes,Route} from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<RipplePage2/>}/>
    </Routes>
  )
}

export default AppRouter