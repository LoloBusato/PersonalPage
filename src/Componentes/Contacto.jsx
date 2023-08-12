import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Contacto = () => {

  const isChecked = useSelector(state => state.isChecked);
  const [diccionarioIdioma, setDiccionarioIdioma] = useState({contactoIconos: []})
  
  useEffect(() => {
    let contactoIconos
    let contactoTextoTitulo
    let contactoTextoSubtitulo 
    if (isChecked) {
      contactoIconos = contactoIconosEn
      contactoTextoTitulo = contactoTextoTituloEn
      contactoTextoSubtitulo = contactoTextoSubtituloEn
    } else{
      contactoIconos = contactoIconosEs
      contactoTextoTitulo = contactoTextoTituloEs
      contactoTextoSubtitulo = contactoTextoSubtituloEs
    }
    setDiccionarioIdioma({contactoIconos, contactoTextoTitulo, contactoTextoSubtitulo})

  }, [isChecked])

  const contactoIconosEs = [
    {info: "GitHub", img: "fab fa-github", href: "https://github.com/LoloBusato"},
    {info: "Enviar email", img: "fa-solid fa-at", href: "mailto: lorenzobusato07@gmail.com"},
    {info: "Llamar", img: "fas fa-mobile-alt", href: "tel:5491161252839"},
    {info: "Linkedin", img: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/lorenzo-busato/"}
  ];
  
  const contactoIconosEn = [
    {info: " GitHub", img: "fab fa-github", href: "https://github.com/LoloBusato"},
    {info: " Send email", img: "fa-solid fa-at", href: "mailto: lorenzobusato07@gmail.com"},
    {info: " Call me", img: "fas fa-mobile-alt", href: "tel:5491161252839"},
    {info: " Linkedin", img: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/lorenzo-busato/"}
  ];

  const contactoTextoTituloEs = "Trabajemos juntos..."
  const contactoTextoSubtituloEs = "¿Qué tipo de música le gusta?"
  const contactoTextoTituloEn = "Let's work together..."
  const contactoTextoSubtituloEn = "What kind of music do you like?"

  return (
    <div id="Contacto" className="pt-12 text-shadow" style={{ textShadow: '2px 2px 1px #1f1f1f'}}>
      <div className="text-center">
        <h1 className='text-6xl'>{diccionarioIdioma.contactoTextoTitulo}</h1>
        <p className='mt-8 text-2xl'><i>{diccionarioIdioma.contactoTextoSubtitulo}</i></p>
      </div>
      <div className="flex text-xl mt-8 justify-around flex-wrap">
        {diccionarioIdioma.contactoIconos.map((item, index) => (
          <a className='mx-2 flex items-center hover:text-indigo-400' key={index} href={item.href} target='_blank' rel='noreferrer'>
            <i className={item.img}></i>
            <p className='pl-1'>{item.info}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contacto