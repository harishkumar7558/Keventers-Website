
import "./Career.css"
import Careercenter from "./Careercenter";
import Careermid from "./Careermid";
import Careerend from "./Careerend";
export default function Careers(){

    return(
        <>
        <div>
            <img className="careerimg" src="./Images/career.png"alt=""width={"100%"}/>       
            
        </div>
        <Careercenter/>
        <Careermid/>
        <Careerend/>


        


        </>
    )
}