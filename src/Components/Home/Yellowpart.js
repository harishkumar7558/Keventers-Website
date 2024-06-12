
import "./Yellowpart.css"
export default function Yellowpart() {

    return (
        <>
            <div className="yellowmain" style={{ "overflow": "hidden" }}>
            <img className="yimg bg-secondary" src="./Images/yello-curve.png" alt="" width={"100%"} />
                <div className="text-center  p-5 container " >
                    
                    <div className="d-flex justify-content-between bg-light rounded-pill m-2 p-4 pos">

                        <div>
                            <img class="roundsimg" src="./Images/Capture1.JPG" alt="" width={"20%"} />
                            <h1>Legendary Taste</h1>
                            <p>There’s a reason we’re the first name that comes to mind when you think of delicious milkshakes!</p>
                        </div>

                        <div>
                            <img class="roundsimg" src="./Images/Capture2.JPG" alt="" width={"20%"} />
                            <h1>Quality Ingredients</h1>
                            <p>Our milkshakes and ice creams churn up happiness with top-quality ingredients – it's a dairy delightful journey!</p>
                        </div>

                        <div>
                            <img class="roundsimg rounded-circle" src="./Images/Capture3.JPG" alt="" width={"20%"} />
                            <h1>Flavourful</h1>
                            <p>We love catering to every tastebud out there, so we’re always innovating with our flavour range. Try a new one today!</p>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}