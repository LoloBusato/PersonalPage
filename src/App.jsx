import NavBar from './Componentes/NavBar'
import Inicio from './Componentes/Inicio'
import Contacto from './Componentes/Contacto'
import Footer from './Componentes/Footer'
import SobreMi from './Componentes/SobreMi'
import Proyectos from './Componentes/Proyectos'
import Curriculum from './Componentes/Curriculum'


import { Provider } from 'react-redux';
import store from './Componentes/Store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='bg-gradient-to-b from-indigo-900 to-indigo-700 text-white'>
          <NavBar />
          <Inicio />
          <SobreMi />
          <Proyectos />

          <Curriculum />

          <Contacto />
          <Footer />
      </div>
    </Provider>
  )
}
export default App