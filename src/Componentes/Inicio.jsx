import React, { useEffect, useState } from 'react'
import FotoPerfil from "../MultiMedia/ProfilePicture2.jpg"
import { useSelector } from 'react-redux';

const Inicio = () => {
  const isChecked = useSelector(state => state.isChecked);
  const [diccionarioIdioma, setDiccionarioIdioma] = useState({})

  const textoProfesionEs = 'Desarrollador FullStack'
  const textoProfesionEn = 'FullStack Developer'
  
  useEffect(() => {
    let textoProfesion
    if (isChecked) {
      textoProfesion = textoProfesionEn
    } else{
      textoProfesion = textoProfesionEs
    }
    setDiccionarioIdioma({textoProfesion})

  }, [isChecked])

  return (
    <div id='Inicio' className="h-screen flex justify-center items-center text-4xl">
      <div className='w-full flex pl-4 justify-center'>
        <div className="h-80 w-80 rounded-full overflow-hidden shadow-xl">
          <img className="w-full h-full object-cover" src={FotoPerfil} alt="Foto de Perfil" />
        </div>
        <div className="ml-8 my-auto">
          <h1 className='text-5xl'>Lorenzo Busato</h1>
          <h2 className='text-3xl'>{diccionarioIdioma.textoProfesion}</h2>
        </div>
      </div>
    </div>
  )
}

export default Inicio