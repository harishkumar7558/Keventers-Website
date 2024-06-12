import EdwardKeventer from "./Edwardkeventer"
import Kevntersmap from "./Keventersmap"
import TheTeam from "./TheTeam"
import "./About.css"
export default function About(){

    return(
        <>
        <div class="container-fluid">
            <img class="abt-big-img" src="./Images/about.jpg"alt="about"width={"100%"}/>
        </div>
        <EdwardKeventer/>
        <Kevntersmap/>
        <TheTeam/>
        </>
    )
}