import React from 'react'
import './about.scss'
import Header from '../../layouts/Header/Header'
import Info from '../Main/Info/Info'
import Partners from '../../components/Partners/Partners';




export default function About() {
  return (
    <div className='contanct'>
      <Header />
      <div className="main" style={{ marginBottom: "20px" }}>
        <Info />
      </div>
    </div>
  )
}
