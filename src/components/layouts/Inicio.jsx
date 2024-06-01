import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Foother from './interfaz/Foother'

const Inicio = () => {
  const [mostrarInfo,SetmostrarInfo]=useState(false)
  const handleToggle=()=>{
    SetmostrarInfo(!mostrarInfo)
  }
  return (
    <div id='inicio-body'>
        <header style={{backgroundColor:"black",height:"3.1rem"}}>
        <section id='e'></section>
        </header>
        <main>
           <h1 className='inicio-anuncio'>¡bienvenido a una experiencia de mucho conocimiento en animal planet!</h1>
           <h1 className='inicio-anuncio'>pero para ello primero escoje el dominio sobre el cual quieres conocer</h1>
           <button className='inicio-informacion-dominio' onClick={handleToggle}>Pero, que es un dominio?
            {mostrarInfo &&(
              <p id='info'className='inicio-informacion-dominio'>En biología, un dominio es el nivel más alto en la jerarquía taxonómica de la clasificación biológica de los organismos. Se trata de una categoría superior que agrupa a los seres vivos en grandes grupos basados en características fundamentales de su estructura celular y genética. Hay tres dominios principales reconocidos en la actualidad:</p>)}
           </button>
           <section>
            <Link className="link-dominio"> <img className='dominio' src="https://plustatic.com/2172/conversions/reino-bacteria-large.jpg" alt="Bacteria" /></Link>
            <Link className="link-dominio"> <img className='dominio' src="https://www.thoughtco.com/thmb/uqeJTnECv0oe8pdLU_TnnumHN9E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/water_bear-5c2fbcf34cedfd0001e826fc.jpg" alt="Arkea" /></Link>
            <Link className="link-dominio"> <img className='dominio' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Plagiomnium_affine_laminazellen.jpeg/240px-Plagiomnium_affine_laminazellen.jpeg" alt="Eukarya" /></Link>
           </section>
        </main>
        <Foother></Foother>   
    </div>
  )
}

export default Inicio