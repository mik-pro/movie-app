import React, { useContext } from 'react'
import { TextContext } from './TestProvider'

export default function Main() {
    let {san}=useContext(TextContext)
  return (
    <div>
      <h3>This is Main component</h3>
      <p>number from App.jsx {san}</p>
    </div>
  )
}
