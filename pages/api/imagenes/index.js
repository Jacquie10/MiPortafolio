
const imagenesHandler = (req,res) =>{
    if (req.method == "GET") {
        const imagenes = [
            "https://i.ytimg.com/vi/zZCyJiyWdX0/maxresdefault.jpg",
            "https://i.ytimg.com/vi/MfS7nrd2gGc/mqdefault.jpg",
            "https://proprogramming.org/wp-content/uploads/2014/12/snake-2Bladder-2Bc-2B-2B.jpg",
            "https://media.istockphoto.com/vectors/te-quiero-love-you-on-spanish-lettering-vector-id1143451367",
            "https://i.pinimg.com/236x/5b/8d/2e/5b8d2ef68397ca3c175afdac08830bad.jpg"
        ]
        res.json({
            images: imagenes,
            msg: ""
              })
    }else{
        //mandar un error 400
        res.status(400).json({
            msg : "Error, metodo no disponible"
        })
    }

}
export default imagenesHandler


