import { eliminarProyecto, obtenerProyecto } from "../../../../dao/proyectos"

//path :  /api/proyectos/[id]
const proyectosHandler = async (req, res) => {

    if (req.method == "DELETE"){
        const data = req.query
        console.log("se elimina "+ data.id)
        await eliminarProyecto(data.id)
        res.json({
            msg: ""
        })
    }else if(req.method == "GET"){
        const data = req.query
        const proyecto = await obtenerProyecto(data.id)
        res.json({
            msg: "",
            proyecto : proyecto
        })
    }
}
export default proyectosHandler