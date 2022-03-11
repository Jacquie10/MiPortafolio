//Method [GET, POST]


const profesores = (req, res) =>{

    res.json(
        {
            msg: "Susy", 
            apellido: "Diaz", 
            frase:"Vive la vida, y no dejes que la vida te viva"
        }
    )
}
export default profesores