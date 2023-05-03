import "../css/nontech.css"
import chem from "../assets/chemlogo.jpg";
import Logo from '../assets/chemlogo2.png'
import Quiz from '../assets/quiz.png'
import Brain from '../assets/brain.jpg'
import Minute from '../assets/minute.png'
import {  Navbar  } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export default function Nontech() {
    return (
        <>
        <div className="mainpage">
            <Navbar expand="lg" className="ms-4">
                <p className="navbrand">
                    <Link to="/home" className="d-flex">
                        <img src={chem} alt="Chem" className="chemlogo me-2" />
                        <h2 className="navbrand1">SYLLOGIC 2K23</h2>
                        <img src={Logo} alt="Logo" className="logo1  ms-2" />
                    </Link>
                </p>
            </Navbar>
        </div>
        <div className="nontech">
                <h1 id="pageHeaderTitle" className="techheader">Non-Technical events</h1>
                <ul className="cards">
                    <li className="nl">
                        <div className="card">
                            <img src={Quiz} className="card__image" alt="quiz" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <div className="card__header-text">
                                        <h3 className="card__title">Quiz</h3>

                                    </div>
                                </div>
                                <div>
                                    <button className="btn" id="d1">Register</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nl">
                        <div className="card">
                            <img src={Brain} className="card__image" alt="attain brain" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <div className="card__header-text">
                                        <h3 className="card__title">Attain Brain</h3>

                                    </div>
                                </div>
                                <div>
                                    <button className="btn" id="d1">Register</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nl">
                        <div className="card">
                            <img src={Minute} className="card__image" alt="minute to win it" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <div className="card__header-text">
                                        <h3 className="card__title">Minute to Win'It</h3>

                                    </div>
                                </div>
                                <div>
                                    <button className="btn" id="d1">Register</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div></>
    )
}