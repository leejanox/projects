import AnimScroll from '@pages/animScroll';
import Two from '@pages/two';
import { Routes , Route } from 'react-router-dom';

function AppRouter() {

  return (
    <Routes>
      <Route path='/one' element={<AnimScroll/>}/>    
      <Route path='/two' element={<Two/>}/>  
    </Routes>
  )
}

export default AppRouter;
