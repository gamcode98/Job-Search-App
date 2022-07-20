import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../context/AuthProvider'

function Nabvar() {
  const context = useContext(authContext)

  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to={'/'}>
          JSA
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to={'/'}>
                Home
              </Link>
            </li>

            {!context.auth.logged && (
              <li className="nav-item">
                <Link to={'/login'}>Login</Link>
              </li>
            )}

            {!context.auth.logged && (
              <li className="nav-item">
                <Link to={'/signup'}>Sign up</Link>
              </li>
            )}

            {context.auth.logged && (
              <li className="nav-item">{context.auth.name}</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nabvar
