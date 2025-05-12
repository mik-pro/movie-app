import React, { useContext } from 'react'
import LanguageContex from './LanguageContex'

let audarmalar = {
    en: "hello",
    kz: "салем",
    ru: "привет"
}
export default function Content() {
    let {state}=useContext(LanguageContex)
  return (
    <div>
      Аударма: {audarmalar[state.language]}
    </div>
  )
}
