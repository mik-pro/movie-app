import React, { useContext, useState } from 'react'
import Main from './Main'
import { TextContext } from './TestProvider'

export default function Test() {
    let {mode,toggleMode}=useContext(TextContext)
  return (
    <div className={mode}>
      <h2>This is Test.jsx</h2>
      <p>Current theme: {mode}</p>
      <button onClick={toggleMode}>Change to {mode == 'light'?'dark':'light'} mode</button>
      <Main/>
    </div>
  )
}
