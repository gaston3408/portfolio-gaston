import React from 'react'
import Nav from '../Components/Nav'

const ContentLayout = ({children}) => {
  return (
    <>
        <Nav />
        {children}
    </>
  )
}

export default ContentLayout