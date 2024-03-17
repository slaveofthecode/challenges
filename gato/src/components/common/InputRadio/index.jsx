import React from 'react'
import style from './styles.module.css'

const index = ({
    id,
    name,
    value,
    text,
    handlerOnChangeOption
}) => {
  return (
    <div className={style.inputRadio} >
        <input 
            id={id}
            type="radio" 
            name={name}  
            onChange={handlerOnChangeOption} 
            value={value}                
            />
        <label htmlFor={id}>{text}</label>
    </div>
  )
}

export default index