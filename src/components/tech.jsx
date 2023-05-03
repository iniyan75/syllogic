import '../css/tech.css';
import chem from "../assets/chemlogo.jpg";
import Logo from '../assets/chemlogo2.png'
import { Navbar } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import ppimg from "../assets/ppimg.jpg";
import ppimg1 from "../assets/ppimg1.jpg";

export default function Tech() {
    return (
        <>
            <div className="mainpage">
            <Navbar  expand="lg" className="ms-4">
                <p className="navbrand">
                    <Link to="/home" className="d-flex">
                        <img src={chem} alt="Chem" className="chemlogo me-2" />
                        <h2 className="navbrand1">SYLLOGIC 2K23</h2>
                        <img src={Logo} alt="Logo" className="logo1  ms-2" />
                    </Link>
                </p>
            </Navbar>
        </div>
            <div className='div1'>
            <h1 id="pageHeaderTitle" className="techheader">Technical events</h1>
                <ul className="cards">
                    <li style={{ marginLeft: "50px" }}>
                        <div className="card">
                            <img src={ppimg} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <div className="card__header-text">
                                        <h3 className="card__title" >Paper Presentation</h3>

                                        </div>
                                    </div>
                                    <div>
                                        <Link to={`/paper`}><button className="btn" id="d1">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{ marginLeft: "50px" }}>
                            <div className="card poster">
                                <img src={ppimg1} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">Poster Presentation</h3>

                                    </div>
                                </div>
                                <div>
                                    <Link to={`/poster`}><button className="btn" id="d1">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            </>  
    )
}