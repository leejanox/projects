import {Routes,Route} from 'react-router-dom'
import TestPage from '@pages/testPage'
import NodePage from '@pages/nodepage'
import Test2Page from '@pages/test2Page'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/test1' element={<TestPage/>}/>
        <Route path='/test2' element={<Test2Page/>}/>
        <Route path='/*' element={<NodePage/>}/>
    </Routes>
  )
}

export default AppRouter