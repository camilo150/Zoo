import React from 'react'
import { Link } from 'react-router-dom'

const Foother = () => {  // funcion sobre las redes sociales de la pagina
  return (
    <footer id='foother'>
        <Link to={"https://youtu.be/r4iEq-IXqfw?si=fy7ZK7C5YwZK07jQ"}>
            <img className='foother-iconos' src="https://cdn-3.expansion.mx/dims4/default/71fd829/2147483647/resize/1280x/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F58%2F66%2Fdb5de50f4ab4970bed8ab24d7aae%2Ftwitter-logo-x.jpg" alt="" />
        </Link>
        <Link to={"https://youtu.be/r4iEq-IXqfw?si=fy7ZK7C5YwZK07jQ"}>
            <img className='foother-iconos' src="https://cdn2.downdetector.com/static/uploads/c/300/f0d8e/FB-f-Logo__blue_512.png" alt="" />
        </Link>
        <Link to={"https://youtu.be/r4iEq-IXqfw?si=fy7ZK7C5YwZK07jQ"}>
            <img className='foother-iconos' src="https://www.tecnogus.com.co/wp-content/uploads/2022/12/YouTube.jpg" alt="" />
        </Link>
        <Link to={"https://youtu.be/r4iEq-IXqfw?si=fy7ZK7C5YwZK07jQ"}>
            <img className='foother-iconos' src="https://i.blogs.es/759769/trucosinstagram/1366_2000.jpg" alt="" />
        </Link>
    </footer>
  )
}

export default Foother