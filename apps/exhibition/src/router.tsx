
import IntroPage from '@pages/introTest/introPage'
import {Routes,Route} from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<IntroPage/>}/>
    </Routes>
  )
}

export default AppRouter