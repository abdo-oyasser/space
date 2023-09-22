import "./home.css"
function Home() {
    return (<div className="home">
        <div className="page-img">
            <img  className="desktop" src="./space-tourism-website-main/starter-code/assets/home/background-home-desktop.jpg" alt="home"/>
            <img className="tablet" src="./space-tourism-website-main/starter-code/assets/home/background-home-tablet.jpg" alt="home"/>
            <img  className="mobile" src="./space-tourism-website-main/starter-code/assets/home/background-home-mobile.jpg" alt="home"/>
        </div>
        <div className="home-content">
            <div className="home-text">
                <h5>So, you want to travel to</h5>
                <h1>Space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="explore">
                Explore
            </div>
        </div>
    </div>
    )
}
export default Home;