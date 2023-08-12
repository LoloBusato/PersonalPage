import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Curriculum = () => {
  const isChecked = useSelector(state => state.isChecked);
  const [diccionarioIdioma, setDiccionarioIdioma] = useState({})

  const textoEspaniol = 'Curriculum'
  const textoIngles = 'Resume'
  
  useEffect(() => {
    let texto
    if (isChecked) {
      texto = textoIngles
    } else{
      texto = textoEspaniol
    }
    setDiccionarioIdioma({texto})

  }, [isChecked])

  return (
    <div>{diccionarioIdioma.texto}</div>
  )
}

export default Curriculum