import React, { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { useSelector, useDispatch } from 'react-redux';

const NavBar = () => {

  const isChecked = useSelector(state => state.isChecked);
  const dispatch = useDispatch();

  const [diccionarioIdioma, setDiccionarioIdioma] = useState({seccionesNavBar: []})

  const seccionesNavBarEs = [
    {href: "#Inicio", texto: "Inicio"},
    {href: "#SobreMi", texto: "Sobre mi"},
    {href: "#Proyectos", texto: "Proyectos"},
    {href: "#Curriculum", texto: "Curriculum"},
    {href: "#Contacto", texto: "Contacto"}
  ];
  const seccionesNavBarEn = [
    {href: "#Inicio", texto: "Home"},
    {href: "#SobreMi", texto: "About"},
    {href: "#Proyectos", texto: "Projects"},
    {href: "#Curriculum", texto: "Resume"},
    {href: "#Contacto", texto: "Contact"}
  ];
  
  useEffect(() => {
    let seccionesNavBar
    if (isChecked) {
      seccionesNavBar = seccionesNavBarEn
    } else{
      seccionesNavBar = seccionesNavBarEs
    }
    setDiccionarioIdioma({seccionesNavBar})
  }, [isChecked])

  return (
    <nav className="fixed w-full z-10 top-0 left-0 flex h-12 text-lg bg-indigo-900">
      <div className='w-1/12 ml-2'>
        <label className="switch mt-2">
            <input 
            type="checkbox" 
            id="slider" 
            checked={isChecked}
            onChange={() => dispatch({ type: 'TOGGLE_CHECKED' })}
            />
            <span className="slider round"></span>
        </label>
      </div>
      <div className='w-9/12 align-text-middle'>
        <ul className="flex justify-around text-center mt-2.5">
          {diccionarioIdioma.seccionesNavBar.map((item, index) => (
            <li key={index} className='transform hover:scale-125 transition-transform'>
              <a href={item.href}>{item.texto}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-1/6'>
        <ul className="flex justify-around mt-2.5">
          <li className='transform hover:scale-125 transition-transform'>
            <a href="https://github.com/LoloBusato" rel='noreferrer' target="_blank"
            className=''>
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className='transform hover:scale-125 transition-transform'>
            <a href="https://api.whatsapp.com/send?phone=541161252839" rel='noreferrer' target="_blank">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
          <li className='transform hover:scale-125 transition-transform'>
            <a href="mailto: lorenzobusato07@gmail.com" rel='noreferrer' target="_blank">
              <i className="fa-solid fa-at"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar