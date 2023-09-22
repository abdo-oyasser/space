import { Link } from "react-router-dom";

import "./destination.css"
import { useEffect } from "react";

function Destination(props) {
    useEffect(() => {

        document.querySelectorAll(".des-route li a").forEach((ele) => {
            ele.onclick = () => {
                document.querySelectorAll(".des-route li a").forEach((e) => {
                    e.classList.remove("active-des")
                })
                ele.classList.add("active-des")
            }
        })
    }
        , [])



    return (
        <div className="destination">
            <div className="page-img">
                <img className="desktop" src={require("./space-tourism-website-main/starter-code/assets/destination/background-destination-desktop.jpg")} alt="back" />
                <img className="tablet" src={require("./space-tourism-website-main/starter-code/assets/destination/background-destination-tablet.jpg")} alt="back" />
                <img className="mobile" src={require("./space-tourism-website-main/starter-code/assets/destination/background-destination-mobile.jpg")} alt="back" />
            </div>
            <div className="destination-content">
                <div className="des-left">
                    <h5><span>01</span> Pick your destination</h5>

                    {< img src={require(`${props.land.images.png}`)} className={`${props.land.name}`} alt={props.land.name} />}

                </div>
                <div className="des-text">
                    <ul className="des-route">
                        <li><Link className="active-des" to={`/Destination/Moon`} >Moon</Link></li>
                        <li><Link to={`/Destination/Mars`} >Mars</Link></li>
                        <li><Link to={`/Destination/Europa`} >Europa</Link></li>
                        <li><Link to={`/Destination/Titan`} >Titan</Link></li>
                    </ul>
                    <h2>{props.land.name}</h2>
                    <p>{props.land.description}</p>
                    <hr />
                    <div className="after-hr-des">
                        <div className="distance">
                            <h6>Avg. distance</h6>
                            <h3>{props.land.distance}</h3>
                        </div>
                        <div className="travel">
                            <h6>Est. travel time</h6>
                            <h3>{props.land.travel}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        // Moon
        // Mars
        // Europa
        // Titan

        // Europa
    )
}
export default Destination;