import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Foother from './interfaz/Foother'

const Inicio = () => {   // el inicio es la pagina que le sigue a la de la portada cuyo proposito es dar informacion sobre el contenido
  const [mostrarInfo,SetmostrarInfo]=useState(false)
  const handleToggle=()=>{   // hace que al dar click al boton saque un texto y al darle click otr avez lo coculta
    SetmostrarInfo(!mostrarInfo)
  }
  return (
    <div id='inicio-body'>
      <header style={{backgroundColor:"black",height:"3.1rem"}}>
        <section id='inicio-icono-national'></section>
      </header>
      
          <h1 className='inicio-anuncio'>¡bienvenido a una experiencia de mucho conocimiento en animal planet!</h1>
          <h1 className='inicio-anuncio'>pero para ello primero escoje el dominio sobre el cual quieres conocer</h1>
          <button id='inicio-informacion-dominio' onClick={handleToggle}>Pero, que es un dominio?
           {mostrarInfo &&(
              <p>En biología, un dominio es el nivel más alto en la jerarquía taxonómica de la clasificación biológica de los organismos. Se trata de una categoría superior que agrupa a los seres vivos en grandes grupos basados en características fundamentales de su estructura celular y genética. Hay tres dominios principales reconocidos en la actualidad:</p>)}
          </button>
          <section id='contenedor-dominios'>
    <Link className="link-dominio">
        <div className="contenedor-imagen">
            <img className='img-dominio' src="https://plustatic.com/2172/conversions/reino-bacteria-large.jpg" alt="Bacteria" />
            <p className='img-texto'>Bacteria</p>
        </div>
    </Link>
    <Link className="link-dominio">
        <div className="contenedor-imagen">
            <img className='img-dominio' src="https://www.thoughtco.com/thmb/uqeJTnECv0oe8pdLU_TnnumHN9E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/water_bear-5c2fbcf34cedfd0001e826fc.jpg" alt="Arkea" />
            <p className='img-texto'>Arkea</p>
        </div>
    </Link>
    <Link className="link-dominio">
        <div className="contenedor-imagen">
            <img className='img-dominio' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Plagiomnium_affine_laminazellen.jpeg/240px-Plagiomnium_affine_laminazellen.jpeg" alt="Eukarya" />
            <p className='img-texto'>Eukarya</p>
        </div>
    </Link>
</section>

        <Foother></Foother> 
    </div>
  )
}
export default Inicio