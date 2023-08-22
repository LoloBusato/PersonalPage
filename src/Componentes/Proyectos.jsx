import React, { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useSelector } from 'react-redux';

function MarcoProyecto({text, hrefPage, hrefRep, textoRepositorio, textoSitioWeb}) {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div
      className='border cursor-pointer w-96 h-64 m-12 bg-indigo-900'
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <div className='h-full transition-transform duration-500 ease-out transform hover:-translate-y-10'>
        <div className='flex h-3/5 items-end justify-center text-4xl'>
          <h2>{text}</h2>
        </div>
        {showButtons && (
          <div className='h-2/5 flex items-end justify-around text-xl'>
            <a
              href={hrefPage}
              rel='noreferrer'
              className='flex items-center border-2 px-3 py-1 rounded-3xl hover:text-indigo-200'
              target='_blank'
            >
              <i className='fa-solid fa-globe'></i>
              <p className='pl-1'>{textoSitioWeb}</p>
            </a>
            <a
              href={hrefRep}
              rel='noreferrer'
              className='flex items-center border-2 px-3 py-1 rounded-3xl hover:text-indigo-200'
              target='_blank'
            >
              <i className='fa-brands fa-github'></i>
              <p className='pl-1'>{textoRepositorio}</p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

const Proyectos = () => {
  const isChecked = useSelector(state => state.isChecked);
  const [diccionarioIdioma, setDiccionarioIdioma] = useState({proyectos: []})
  
  useEffect(() => {
    let proyectosTitulo
    let proyectos
    let textoSitioWeb
    let textoRepositorio
    if (isChecked) {
      proyectosTitulo = proyectosTituloEn
      proyectos = proyectosEn
      textoSitioWeb = textoSitioWebEn
      textoRepositorio = textoRepositorioEn
    } else{
      proyectosTitulo = proyectosTituloEs
      proyectos = proyectosEs
      textoSitioWeb = textoSitioWebEs
      textoRepositorio = textoRepositorioEs
    }
    setDiccionarioIdioma({proyectosTitulo, proyectos, textoSitioWeb, textoRepositorio})

  }, [isChecked])

  const proyectosEs = [
    {hrefPage: "https://codepen.io/LoloBusato/full/BaxYPXe", hrefRep: "https://codepen.io/LoloBusato/pen/BaxYPXe", text: "Maquina de Refranes"},
    {hrefPage: "https://lolobusato.github.io/25-5-Clock/", hrefRep: "https://github.com/LoloBusato/25-5-Clock", text: "Pomodoro"},
    {hrefPage: "https://lolobusato.github.io/Drum-Machine/", hrefRep: "https://github.com/LoloBusato/Drum-Machine", text: "Batería Virtual"},
    {hrefPage: "https://lolobusato.github.io/JavaScript-Calculator/", hrefRep: "https://github.com/LoloBusato/JavaScript-Calculator", text: "Calculadora"},
    {hrefPage: "https://lolobusato.github.io/LorenzoBusato/indexEs", hrefRep: "https://github.com/LoloBusato/LorenzoBusato", text: "Lorenzo Página"},
  ];
  
  const proyectosEn = [
    {hrefPage: "https://codepen.io/LoloBusato/full/BaxYPXe", hrefRep: "https://codepen.io/LoloBusato/pen/BaxYPXe", text: "Quote Machine"},
    {hrefPage: "https://lolobusato.github.io/25-5-Clock/", hrefRep: "https://github.com/LoloBusato/25-5-Clock", text: "Pomodoro"},
    {hrefPage: "https://lolobusato.github.io/Drum-Machine/", hrefRep: "https://github.com/LoloBusato/Drum-Machine", text: "Drum Machine"},
    {hrefPage: "https://lolobusato.github.io/JavaScript-Calculator/", hrefRep: "https://github.com/LoloBusato/JavaScript-Calculator", text: "Calculator"},
    {hrefPage: "https://lolobusato.github.io/LorenzoBusato/indexEs", hrefRep: "https://github.com/LoloBusato/LorenzoBusato", text: "Lorenzo Website"},
  ];

  const proyectosTituloEs = "Estos son algunos de mis proyectos";
  const proyectosTituloEn = "These are some of my projects";

  const textoSitioWebEs = "Sitio Web"
  const textoRepositorioEs = "Repositorio"
  const textoSitioWebEn = "Web Page"
  const textoRepositorioEn = "Repository"

  return (
    <div id='Proyectos' className='pt-16 min-h-screen'>
      <div className="text-center text-3xl">
        <h1>{diccionarioIdioma.proyectosTitulo}</h1>
      </div>
      <div className="flex flex-wrap justify-around">
        {diccionarioIdioma.proyectos.map((item, index) => (
          <MarcoProyecto key={index} text={item.text} hrefPage={item.hrefPage} hrefRep={item.hrefRep} textoRepositorio={diccionarioIdioma.textoRepositorio} textoSitioWeb={diccionarioIdioma.textoSitioWeb}/>
        ))}
      </div>
    </div>
  )
}

export default Proyectos