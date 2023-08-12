import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const isChecked = useSelector(state => state.isChecked);
  const [diccionarioIdioma, setDiccionarioIdioma] = useState({})

  const footerTextoEs = '© Creado por Lorenzo Busato'
  const footerTextoEn = '© Created by Lorenzo Busato'
  
  useEffect(() => {
    let footerTexto
    if (isChecked) {
      footerTexto = footerTextoEs
    } else{
      footerTexto = footerTextoEn
    }
    setDiccionarioIdioma({footerTexto})

  }, [isChecked])

  return (
    <footer>
      <div className='border-t-2 py-1 mt-20'>
        <p className='pl-3'>{diccionarioIdioma.footerTexto}</p>
      </div>
    </footer>
  )
}

export default Footer