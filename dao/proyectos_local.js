
const guardarProyecto = (nombreProyecto, usuario, puntaje) =>{
    const proyecto = {
        id: 1,
        nombre:nombreProyecto,
        usuario: usuario,
        puntaje: puntaje
    }
   const proyectoStr = localStorage.getItem('proyectos')
   if(proyectoStr!= null){
        const proyectos = JSON.parse(proyectoStr)
        
        const utlimoId  = proyectos[proyectos.length -1]
        proyecto.id= utlimoId + 1 
        proyectos.push(proyecto)

        localStorage.setItem("proyectos", JSON.stringify(proyectos))

   }else{
       const proyectos = [proyecto]
       localStorage.setItem("proyectos", JSON.stringify(proyectos))
   }


}

const obtenerProyectos = () =>
{
    const proyectoStr = localStorage.getItem("proyectos")
    if(proyectoStr!= null){
        return JSON.parse(proyectoStr)
    }else{
        return []
    }
}

const eliminarProyecto = (id) =>{
    const proyectoStr = localStorage.getItem("proyectos")
    if(proyectoStr!= null){
        
        const proyectos = JSON.parse(proyectoStr)

        let posicion = 0
        let posicionEncontrada = -1
        for(let proyecto of proyectos){
            if(proyecto.id == id){
                posicionEncontrada = posicion
                break
            }
            posicion++
        }

        if(posicionEncontrada>=0){
            proyectos.splice(posicionEncontrada,1) //para borrar  un elemento
            localStorage.setItem("proyectos" , JSON.stringify(proyectos))
        }
    }
}  

//obtener un proyecto para editarlo solo uno

const obtenerProyecto = (id) =>{
    const proyectoStr = localStorage.getItem("proyectos")
    if(proyectoStr!= null){
        //convertir strin a json
        const proyectos = JSON.parse(proyectoStr)
        for(let proyecto of proyectos){
            if(proyecto.id == id)
            {
                return proyecto
            }
        }
    }
    return null
}
const modificarProyecto = (proyecto) =>{
    const proyectoStr = localStorage.getItem("proyectos")
    if(proyectoStr!= null){
        //convertir strin a json
        const proyectos = JSON.parse(proyectoStr)
        for(let proy of proyectos){
            if(proyecto.id == proy.id)
            {
                proy.nombre = proyecto.nombre
                proy.usuario = proyecto.usuario
                proy.rating = proyecto.rating
                break
            }
        }
        localStorage.setItem("proyectos", JSON.stringify(proyectos))
    }
}



export  {guardarProyecto, obtenerProyectos, eliminarProyecto, obtenerProyecto,modificarProyecto }
