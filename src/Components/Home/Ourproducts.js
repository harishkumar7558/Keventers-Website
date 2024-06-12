
import "./Yellowpart.css"
export default function Ourproducts() {

    return (
        <div className="container-fluid">
            <h1 className="h1what">Our Products</h1>
            <p className="mt-3">Indulge in the creamy, dreamy decadence of our concoctions.</p>
            <p>Whether it’s the melty goodness of chocolate or the tart richness of berries, we’ve got something for everyone.</p>
            <div className="d-flex mb-5 cards">
                <div class="card  m-5 "style={{"width":"35%"}}>
                    <img src="./Images/fir1.png" class="card-img-top p-3" alt="..." width={"20%"} />
                    <div class="card-body">
                        <h5 class="card-title  fs-1 fw-bold ">Milkshakes</h5>
                        
                    </div>
                </div>

                <div class="card m-5 "style={{"width":"35%"}} >
                    <img src="./Images/fir2.png" class="card-img-top p-3 " alt="..."width={"20%"}  />
                    <div class="card-body">
                        <h5 class="card-title  fs-1 fw-bold">Thick Shakes</h5>
                       
                    </div>
                </div>

                <div class="card m-5 "style={{"width":"35%"}}>
                    <img src="./Images/fir3.png" class="card-img-top p-4" alt="..." width={"20%"} />
                    <div class="card-body">
                        <h5 class="card-title   fs-1 fw-bold">Iced Beverages</h5>
                      
                    </div>
                </div>



            </div>
            <div className="d-flex mb-5 cards">
                <div class="card  m-5 "style={{"width":"35%"}}>
                    <img src="./Images/sec1.jpg" class="card-img-top p-3" alt="..." width={"20%"} />
                    <div class="card-body">
                        <h5 class="card-title text-wrap  fs-1 fw-bold ">Milkshakes</h5>
                        
                    </div>
                </div>

                <div class="card m-5 "style={{"width":"35%"}} >
                    <img src="./Images/sec2.png" class="card-img-top p-3 " alt="..."width={"20%"}  />
                    <div class="card-body">
                        <h5 class="card-title  fs-1 fw-bold">Thick Shakes</h5>
                       
                    </div>
                </div>

                <div class="card m-5 "style={{"width":"35%"}}>
                    <img src="./Images/sec3.png" class="card-img-top p-4" alt="..." width={"20%"} />
                    <div class="card-body">
                        <h5 class="card-title   fs-1 fw-bold">Iced Beverages</h5>
                      
                    </div>
                </div>



            </div>
        </div>
    )
}