import Navbar from './components/Navbar'
import Login from './pages/Login'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
