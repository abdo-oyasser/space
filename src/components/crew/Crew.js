import { Link } from "react-router-dom";
import "./crew.css"
import { useEffect } from "react";
function Crew(props) {
    useEffect(() => {
        document.querySelectorAll(".crew-route a").forEach((ele) => {
            ele.onclick = () => {
                document.querySelectorAll(".crew-route a").forEach((e) => {
                    e.classList.remove("active-crw")
                })
                ele.classList.add("active-crw")
            }
        }, [])
    })

    return (
        <div className="crew">
            <div className="page-img">
                <img className="desktop" src={require("./space-tourism-website-main/starter-code/assets/crew/background-crew-desktop.jpg")} alt="back" />
                <img className="tablet" src={require("./space-tourism-website-main/starter-code/assets/crew/background-crew-tablet.jpg")} alt="back" />
                <img className="mobile" src={require("./space-tourism-website-main/starter-code/assets/crew/background-crew-mobile.jpg")} alt="back" />
            </div>
            <div className="crew-con">
                <div className="crew-left">
                    <h5><span>02</span>Meet your crew</h5>
                    <div className="crew-data">
                        <p className="role">{props.person.role}</p>
                        <h4>{props.person.name}</h4>
                        <p>{props.person.bio}</p>
                    </div>
                    <ul className="crew-route">
                        <Link className="active-crw" to={`/crew/Douglas Hurley`} ></Link>
                        <Link to={`/crew/Mark Shuttleworth`} ></Link>
                        <Link to={`/crew/Victor Glover`} ></Link>
                        <Link to={`/crew/Anousheh Ansari`} ></Link>
                    </ul>
                </div>
                <div className="crew-img">
                    <img className="Anou" src={require(`${props.person.images.png}`)} alt={props.person.name} />
                </div>
            </div>
        </div>
    )
}
export default Crew;