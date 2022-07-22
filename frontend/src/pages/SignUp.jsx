import React, { useRef, useContext } from 'react'
import { post } from '../api'
import { authContext } from '../context/AuthProvider'

function SignUp() {
  const name = useRef()
  const email = useRef()
  const password = useRef()

  const signUp = (e) => {
    const context = useContext(authContext)

    e.preventDefault()
    post('auth/signup', {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    }).then(({ data }) => {
      if (data.error) {
        console.log(data)
      } else {
        localStorage.setItem('token', data.token)
        context.setAuth({
          id: data.userData.id,
          name: data.userData.name,
          logged: true,
        })
      }
    })
    // .catch((error) => console.log(error))
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-5 mx-auto">
          <form onSubmit={signUp} className="border rounded py-4 px-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                ref={name}
              />
            </div>
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
