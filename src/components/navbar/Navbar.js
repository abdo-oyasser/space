import { Link } from "react-router-dom";
import "./navbar.css"
import { useEffect } from "react";
function Navbar() {
    useEffect(() => {
        document.querySelectorAll(".navbar-main li a").forEach((ele) => {
            ele.onclick = () => {
                document.querySelectorAll(".navbar-main li a").forEach((e) => {
                    e.classList.remove("active")
                })
                ele.classList.add("active")
            }
        })
    })
    let logo = "./logo.svg"
    let cancel = "./Group.svg"
    return (
        <div className="navbar-con">
            <Link to={"/"} onClick={() => {
                document.querySelectorAll(".navbar-main li a").forEach((e) => {
                    e.classList.remove("active")
                })
                document.querySelector(".navbar-main li a:nth-child(1)").classList.add("active")

            }}><img src={require(`${logo}`)} alt="..." /></Link>
            <hr />
            <ul className="navbar-main">
                <li><div className="cancel" onClick={() => {
                    document.querySelector(".navbar-main").style.display = "none"
                    document.querySelector(".mobile-menu").style.display = "block"
                    document.querySelector(".cancel").style.display = "none"
                }}>
                    <img src={require(`${cancel}`)} alt="cancel" />
                </div></li>
                <li><Link to={"/"} className="active"> <span>00</span> Home</Link></li>
                <li><Link to={"/Destination"}> <span>01</span> Destination</Link></li>
                <li><Link to={"/crew"}> <span>02</span> Crew</Link></li>
                <li><Link to={"/Technology"}> <span>03</span> Technology</Link></li>
            </ul>
            <div className="mobile-menu" onClick={() => {
                document.querySelector(".navbar-main").style.display = "flex"
                document.querySelector(".mobile-menu").style.display = "none"
                document.querySelector(".cancel").style.display = "block"
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    )
}
export default Navbar;