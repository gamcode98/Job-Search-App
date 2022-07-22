import Navbar from './components/Navbar'
import Login from './pages/Login'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import { useEffect } from 'react'
import { useContext } from 'react'
import { authContext } from './context/AuthProvider'
import { postWithToken } from './api'

function App() {
  const context = useContext(authContext)
  useEffect(() => {
    postWithToken('auth/validate')
      .then(({ data }) => {
        if (data.failed) {
          console.log(data)
        } else {
          localStorage.setItem('token', data.token)
          context.setAuth({
            id: data.user.id,
            name: data.user.name,
            logged: true,
          })
        }
      })
      .catch((error) => console.log(error))
  }, [])

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
