import { useEffect, useState } from 'react'
import HTMLFoto from '../MultiMedia/HTML.png'
import CSSFoto from "../MultiMedia/CSS.png"
import JSFoto from "../MultiMedia/javascript.png"
import NodeFoto from "../MultiMedia/Nodejs.png"
import GitFoto from "../MultiMedia/Git.png"
import BashFoto from "../MultiMedia/Bash.png"
import MongoFoto from "../MultiMedia/MongoDB.png"
import ReactFoto from "../MultiMedia/react.png"
import PythonFoto from "../MultiMedia/Python.png"
import MySQLFoto from "../MultiMedia/MySQL.png"

import { useSelector } from 'react-redux';

const SobreMi = () => {
  const infoSeccionAbout = [
    {info: "React", foto: ReactFoto},
    {info: "Node.js", foto: NodeFoto},
    {info: "Git", foto: GitFoto},
    {info: "Python", foto: PythonFoto},
    {info: "MySQL", foto: MySQLFoto},
    {info: "MongoDB", foto: MongoFoto},
    {info: "Bash", foto: BashFoto},
    {info: "HTML", foto: HTMLFoto},
    {info: "CSS", foto: CSSFoto},
    {info: "JavaScript", foto: JSFoto},
  ];

  const isChecked = useSelector(state => state.isChecked);
  const [diccionarioIdioma, setDiccionarioIdioma] = useState({})

  const sobreMiTituloEs = "¡Hola mundo!";
  const sobreMiInformacion1Es = "Me llamo Lorenzo Busato, tengo 21 años y vivo en Buenos Aires, Argentina. Soy técnico en electrónica y me encuentro estudiando la carrera de licenciatura en análisis de sistemas. Además, soy programador autodidacta, actualmente enfocado en BackEnd, y adquiriendo nuevos conocimientos día a día.";
  const sobreMiInformacion2Es = "Este es mi sitio web que refleja mis habilidades actuales. ¡Bienvenidos!";
  const sobreMiHabilidadesTituloEs = "Habilidades";
  
  const sobreMiTituloEn = "Hello world!";
  const sobreMiInformacion1En = "My name is Lorenzo Busato, I am 21 years old and I live in Buenos Aires, Argentina. I am an Electronics Technician and I am studying for a bachelor degree in Systems Analysis. Also, I am a self-taught programmer, currently focused on BackEnd, and acquiring new knowledge day by day.";
  const sobreMiInformacion2En = "This is my portfolio reflecting my current skills. Welcome!";
  const sobreMiHabilidadesTituloEn = "Skills";

  useEffect(() => {
    let sobreMiTitulo
    let sobreMiInformacion1
    let sobreMiInformacion2
    let sobreMiHabilidadesTitulo
    if (isChecked) {
      sobreMiTitulo = sobreMiTituloEn
      sobreMiInformacion1 = sobreMiInformacion1En
      sobreMiInformacion2 = sobreMiInformacion2En
      sobreMiHabilidadesTitulo = sobreMiHabilidadesTituloEn
    } else{
      sobreMiTitulo = sobreMiTituloEs
      sobreMiInformacion1 = sobreMiInformacion1Es
      sobreMiInformacion2 = sobreMiInformacion2Es
      sobreMiHabilidadesTitulo = sobreMiHabilidadesTituloEs
    }
    setDiccionarioIdioma({sobreMiTitulo, sobreMiInformacion1, sobreMiInformacion2, sobreMiHabilidadesTitulo})

  }, [isChecked])

  return (
    <div id='SobreMi' className="pt-16 mx-auto max-w-screen-lg">
        <div className="w-full px-7 text-center my-auto">
          <h2 className='text-4xl mb-3'>{diccionarioIdioma.sobreMiTitulo}</h2>
          <p className='text-xl'>{diccionarioIdioma.sobreMiInformacion1}</p>
          <p className='text-xl'>{diccionarioIdioma.sobreMiInformacion2}</p>
        </div>
        <div className="px-7 w-full justify-center text-center text-2xl mt-10">
          <h2 className='mb-5 text-4xl'>{diccionarioIdioma.sobreMiHabilidadesTitulo}</h2>
          <div className="flex text-xl flex-wrap items-center justify-center">
            {infoSeccionAbout.map((item, index) => (
              <div 
              key={index} 
              className='w-36 mb-5 transform hover:scale-125 transition duration-300 ease-in-out'>
                <img 
                className='h-14 w-14 bg-cover mx-auto'
                alt={`${item.info} Logo`}
                src={item.foto}
                />
                <p>{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default SobreMi