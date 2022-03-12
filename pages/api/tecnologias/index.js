import { obtenerTecnologias } from "../../../dao/tecnologias"

const tecnologiasHandler = async (req, res) =>{
    if (req.method == "GET"){
        //obtener lo que esta en la tabla tecnologias para luego mostrarlo
        const tecnologias= await obtenerTecnologias()
        //devuelve lo que contiene en la tabla tecnologias
        res.json({
            msg: "",
            tecnologias: tecnologias
        })
    }else {
        res.status(400).json( {
            msg: "Error: metodo no disponible"
        })
    }
}
export default tecnologiasHandler