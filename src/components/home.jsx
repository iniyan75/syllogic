import "../css/home.css"
import { Link } from "react-router-dom";
import "../assets/js/timer.js"; 

export default function Home() {

    return (
        <>
            <div className="full1">

                <div className="wrapper ">
                    <div className="bg wrappertext"> Syllogic 2k23 </div>
                    <div className="fg  wrappertext">Syllogic 2k23 </div>
                </div>

                <div className="overlay"></div>
                <div className="crapper">
                    <div>
                        <div className="countdown-container">
                            <div className="time">
                                <p id="days" style={{ margin: "0px" }} className="big-text">0</p>
                                <span>Days</span>
                            </div>
                            <div className="time">
                                <p id="hours" style={{ margin: "0px" }} className="big-text">0</p>
                                <span>Hours</span>
                            </div>
                            <div className="time">
                                <p id="min" style={{ margin: "0px" }} className="big-text">0</p>
                                <span>Minutes</span>
                            </div>
                            <div className="time">
                                <p id="sec" style={{ margin: "0px" }} className="big-text">0</p>
                                <span>Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrap">
                    <Link to="/home"> <button className='button1'>Let's Go</button></Link>
                </div>
            </div>
        </>
    )
}