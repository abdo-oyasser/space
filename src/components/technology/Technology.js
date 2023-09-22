import { Link } from "react-router-dom";
import "./technology.css"
import { useEffect } from "react";


function Technology(props) {

    useEffect(() => {
        document.querySelectorAll(".tech-route a").forEach((ele) => {
            ele.onclick = () => {
                document.querySelectorAll(".tech-route a").forEach((e) => {
                    e.classList.remove("tech-active")
                })
                ele.classList.add("tech-active")
            }
        }, [])
    })

    return (
        <div className="technology">
            <div className="page-img">
                <img className="desktop" src={require(`./space-tourism-website-main/starter-code/assets/technology/background-technology-desktop.jpg`)} alt="background" />
                <img className="tablet" src={require(`./space-tourism-website-main/starter-code/assets/technology/background-technology-tablet.jpg`)} alt="background" />
                <img className="mobile" src={require(`./space-tourism-website-main/starter-code/assets/technology/background-technology-mobile.jpg`)} alt="background" />
            </div>

            <div className="tech-con">
                <div className="tech-left">

                    <h5><span>03</span> SPACE LAUNCH 101</h5>
                    <div className="tech-main">
                        <ul className="tech-route">
                            <Link className="tech-active" to={"/Technology/Launch vehicle"}>1</Link>
                            <Link to={"/Technology/Spaceport"}>2</Link>
                            <Link to={"/Technology/Space capsule"}>3</Link>
                        </ul>
                        <div className="tech-text">
                            <p className="p-16">THE TERMINOLOGY…</p>
                            <h4>{props.craft.name}</h4>
                            <p>{props.craft.description}</p>
                        </div>
                    </div>
                </div>
                <div className="tech-img">
                    <img className="desktop" src={require(`${props.craft.images.portrait}`)} alt={props.craft.name} />
                    <img className="tablet mobile" src={require(`${props.craft.images.landscape}`)} alt={props.craft.name} />
                </div>
            </div>
        </div>
    )
}
export default Technology;