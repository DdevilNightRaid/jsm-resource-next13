import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { PropsWithChildren } from 'react'

const layout = ({children}: PropsWithChildren) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default layout