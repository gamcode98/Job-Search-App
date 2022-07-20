import React from 'react'
import Nabvar from './Navbar'

function Template({ children }) {
  return (
    <>
      <Nabvar />
      {children}
    </>
  )
}

export default Template
