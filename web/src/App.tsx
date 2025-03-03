import AnimScroll from '@pages/animScroll';
import { Routes , Route } from 'react-router-dom';

function AppRouter() {

  return (
    <Routes>
      <Route path='/one' element={<AnimScroll/>}/>      
    </Routes>
  )
}

export default AppRouter;
