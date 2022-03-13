import { useEffect, useState } from "react";
import Banner from "../componentes/Banner.componentes";
import Barra from "../componentes/Barra.componentes";
import Footer from "../componentes/Footer.componentes";
import Formulario from "../componentes/Formulario.componentes";
import Proyectos from "../componentes/Proyectos.componentes";

import {Image}  from "react-bootstrap";

export default  function Home() {


  // const listaProyectos = [
  //   {id:1, nombre: "Proyecto A", usuario: "Jacquie" ,puntaje: 4.9},
  //   {id:2, nombre: "Proyecto B", usuario: "Jose" ,puntaje: 8.2},
  //   {id:3, nombre: "Proyecto C", usuario: "Esteban" ,puntaje: 5.7},
  //   {id:4, nombre: "Proyecto D", usuario: "Melani" ,puntaje: 7.8}
  // ]

  //utilizando Fetch
    //   ubica en html   utiliza para cambios
  const [listaImagenes, setlistaImagenes] = useState([])
  const [listaProyectos, setlistaProyectos] = useState([])
  

  //cambio de estado por si ingresa a los datos correctos de usuario
  const [errorLogin, setErrorLogin] = useState(false)

//poner el async
  useEffect(async () => {
    const response = await fetch("/api/proyectos")
    const data = await response.json()
    setlistaProyectos(data.proyectos)  //llamar al campo y actualizar la variable de estado

    const response2 = await fetch("/api/imagenes")
     const dataImagenes = await response2.json()
    setlistaImagenes(dataImagenes.images)

  },[] )






  const loginHandler = (username, password) => 
  {
    if(username == "Jacquie" && password == "123"){
      location.href = '/main'
    }else{
      console.log("error, eres un impostor")
      setErrorLogin(true)
    }
  }

  return <div >
    <header>
        <title>Jacquie</title>        

    </header>
    <div className="container mt-4" >
         <h1>Mi portafolio</h1>
         <Image src="/images/shadow.png" thumbnail={true}/>  
          <Barra/>
          <Banner imagen = {listaImagenes} />
          <div className="row mt-4">
            <div className="col mt-4">
                 <Proyectos proyectos = {listaProyectos} modo={"lista"}/>
            </div>
            <div className="col mt-4">
                  <Formulario onLogin={loginHandler } error={errorLogin} />
            </div>
          
          </div>
         
          <Footer/>
    </div>
    </div>
}
