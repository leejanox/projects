
import Ex1 from '@pages/testPage/ex1'
import {Routes,Route} from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<Ex1/>}/>
    </Routes>
  )
}

export default AppRouter