const Banner = (props) => {
    return <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    { props.imagen.map(  (img, index) =>{
        if(index == 0){
          return <div key={index} className="carousel-item active">
          <img src={img} className="d-block w-100" />
           </div>

        }else{
          return     <div key={index} className="carousel-item ">
          <img src={img} className="d-block w-100" />
        </div>
        }
          
        
    } )

    }
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

}
export default Banner 