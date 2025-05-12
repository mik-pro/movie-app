import React, { createContext, useState } from 'react'
 export const TextContext = createContext()
export default function TestProvider({children}) {
   const [mode,setMode]=useState('light')

   const toggleMode = ()=>{
    setMode(prevMode => (prevMode==="light"?"dark":"light"))
   }
  return (
    <TextContext.Provider value={{mode,toggleMode}}>
      {children}
    </TextContext.Provider>
  )
}
