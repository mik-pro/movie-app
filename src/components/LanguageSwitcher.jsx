import React, { useContext } from 'react'
import LanguageContex from './LanguageContex'

export default function LanguageSwitcher() {
    let {state,dispatch} = useContext(LanguageContex)
  return (
    <div>
      <select value={state.language} onChange={(e)=>dispatch({type: "til_austyr",payload: e.target.value})}>
      <option value="en">English</option>
      <option value="kz">Казакша</option>
      <option value="ru">Русски</option>
    </select>
    </div>
  )
}
