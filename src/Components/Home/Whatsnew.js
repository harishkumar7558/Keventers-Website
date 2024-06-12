
import "./Whatsnew.css"
export default function Whatsnew(){

    return(
        <>
        <div className="container-fluid bg-secondary"style={{"overflow":"hidden"}}>
            <h1 className="h1what">What's New?</h1>
            <p className="whatptag">Whether it’s whipping up new flavours, blending a cool new store into the mix, or creating a news-worthy collaboration, we’re always shaking things up!</p>
            <div className="d-flex justify-content-evenly">
                <img className="whatimg1"src="./Images/what.png" alt="" width={"20%"}/>
                <img className="whatimg1" src="./Images/what1.webp" alt="" width={"20%"}/>
                <img  className="whatimg1" src="./Images/what2.webp" alt="" width={"20%"}/>
                <img  className="whatimg1" src="./Images/MAK00200.webp" alt="" width={"20%"}/>
            </div>
            <img className="bg-secondary white" src="./Images/white-curve.png" alt=""width={"110%"} style={{"margin-left":"-8%"}}/>
        </div>
       
        </>
    )
}