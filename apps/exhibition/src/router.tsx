import ScrollingPage from '@pages/scrolling/scrollingPage'
import {Routes,Route} from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<ScrollingPage/>}/>
    </Routes>
  )
}

export default AppRouter