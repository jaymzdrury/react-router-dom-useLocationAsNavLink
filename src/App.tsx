import {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
const Main = lazy(() => import('./Main'))
const About = lazy(() => import('./About'))
const Profile = lazy(() => import('./Profile'))

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Main /></Suspense>} />
        <Route path='/about' element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
        <Route path='/profile' element={<Suspense fallback={<div>Loading...</div>}><Profile /></Suspense>} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
