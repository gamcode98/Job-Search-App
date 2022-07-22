import React, { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from '../api'
import { authContext } from '../context/AuthProvider'

function Login() {
  const context = useContext(authContext)
  const navigate = useNavigate()

  const email = useRef()
  const password = useRef()

  const login = (e) => {
    e.preventDefault()

    post('auth/login', {
      email: email.current.value,
      password: password.current.value,
    }).then((data) => {
      const { token, user } = data.data
      localStorage.setItem('token', token)
      context.setAuth({
        id: user.id,
        name: user.name,
        logged: true,
      })
      navigate('/', {
        replace: true,
      })
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-5 mx-auto">
          <form onSubmit={login} className="border rounded py-4 px-3">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                ref={password}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
