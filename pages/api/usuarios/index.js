import { obtenerUsuarios } from "../../../dao/usuarios"

const usuarioHandler = async (req, res) => {
    if (req.method == "GET"){
        const usuarios = await obtenerUsuarios()
        res.json({
            msg: "",
            usuarios: usuarios
        })
    }else {
        res.status(400).json( {
            msg: "Error: metodo no disponible"
        })
    }
}
export default usuarioHandler