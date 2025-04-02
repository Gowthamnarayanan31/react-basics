
import './App.css'
import Course from './Course'
import Footer from './footer'
import Navbar from './Navbar'
import html from './assets/html1.png'
import css from './assets/css.png'
import js from './assets/js.png'

function App() {
  

  return (
    <>
    
      
      <Course  name="HTML" price="$199" image={html}/>
      <Course name="CSS" price="$199" image={css}/>
      <Course name="JS" price="$499"  image={js}/>
      
      </>

     

    
  )
}

export default App
