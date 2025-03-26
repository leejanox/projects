import {Routes,Route} from 'react-router-dom'
import TestPage from '@pages/testPage'
import NodePage from '@pages/nodepage'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/test1' element={<TestPage/>}/>
        <Route path='/*' element={<NodePage/>}/>
    </Routes>
  )
}

export default AppRouter