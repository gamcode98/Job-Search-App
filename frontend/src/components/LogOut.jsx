import React from 'react'
import { useContext } from 'react'
import { authContext } from '../context/AuthProvider'

function LogOut() {
  const context = useContext(authContext)
  const handlerLogOut = () => {
    localStorage.removeItem('token')
    context.setAuth({
      name: '',
      id: '',
      logged: false,
    })
  }

  return (
    <button className="btn btn-danger" onClick={handlerLogOut}>
      Cerrar sesión
    </button>
  )
}

export default LogOut
