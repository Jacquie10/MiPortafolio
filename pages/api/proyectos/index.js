import { guardarProyecto, modificarProyecto, obtenerProyectos } from "../../../dao/proyectos"
import { obtenerUsuario } from "../../../dao/usuarios"


const proyectosHandler = async (req, res) =>{
    if (req.method == "GET") {
      
        //consultar en la base de datos
        //devolver la respuesta
        const proyectos = await obtenerProyectos()
        const proyectosConUsername = []
        for (let proyecto of proyectos){
            const usuario =  await obtenerUsuario(proyecto.idusuario)
            proyectosConUsername.push(
                {
                    id: proyecto.id,
                    nombre:proyecto.nombre,
                    idusuario:proyecto.idusuario,
                    usuario: usuario == null ? "" : usuario.username,
                    rating:proyecto.rating,
                    createdAt:proyecto.createdAt,
                    updatedAt: proyecto.updatedAt
                }
            )
        }

        
        res.json({
    
            msg: "",
            proyectos: proyectosConUsername
        })

     
       

    }else if (req.method == "POST"){
        //registrar en la base de datos
        console.log("se debe guardar en la bd")
        const data = JSON.parse(req.body)

        await guardarProyecto( data.nombre , data.usuario, data.rating )        
      
        
        
        res.json({
            msg: ""
          
        })
    }else if(req.method == "PUT"){
        const data = JSON.parse(req.body)
        await modificarProyecto(data)
        res.json({
            msg: ""
        })

    }
    else{
        res.status(400).json({
            msg: "Metodo no definido"
        })
    }

}
export default proyectosHandler