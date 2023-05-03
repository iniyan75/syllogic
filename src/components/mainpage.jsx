import React from "react";
import '../css/mainpage.css'
import '../css/destin.scss'
import Logo from '../assets/chemlogo2.png'
import "../assets/js/back2top.js"

import { Button, Navbar } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import kec from "../assets/kec.png";
import hod from "../assets/hod.jpg";
import Non from '../assets/nontech.jpg'
import Tech from '../assets/tech.jpg'
import sc1 from "../assets/sc1.jpg";
import sc2 from "../assets/sc2.jpg";
import sc3 from "../assets/sc3.jpg";
import mail from "../assets/gmail.png";
import insta from "../assets/instagram.png";
import chem from "../assets/chemlogo.jpg";
import pay from "../assets/payment.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Mainpage() {
    const navigate = useNavigate();
    const tech = () => {
        navigate('/tech');
    };
    const nontech = () => {
        navigate('/nontech');
    };

    return (
        <>
            <div className="page1">
                <div className="mainpage">
                    <Navbar expand="lg" fixed="top" >
                        <Link to="/" className="d-flex">
                            <img src={chem} alt="Chem" className="chemlogo me-2" />
                            <h2 className="navbrand1">SYLLOGIC 2K23</h2>
                            <img src={Logo} alt="Logo" className="logo1  ms-2" />
                        </Link>

                    </Navbar>
                </div>


                <Navbar className="ml-3" fixed="bottom" >


                    <a href="#top">  <button id="b2t" style={{ display: "none" }} className="noselect"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg></button>

                    </a>

                </Navbar>

                {/*------------------- kec name-------------------------- */}

                <div className="kecname mt-0 pt-5">
                    <Container>
                        <Row>
                            <Row>
                                <div className="cname">
                                    <Col className="cname">
                                        <img src={kec} alt="Transform Yourself" className="ilogo" />
                                        <small>Kongu Engineering College</small></Col>
                                </div>
                            </Row>
                            <Row className="rank" >
                                <Col sm={12}>Affilated to Anna University || Accrediated by NAAC with A++ grade</Col>
                                <Col sm={12}>Perundurai Erode-638060 TamilNadu</Col>
                            </Row>


                        </Row>
                    </Container>
                </div>
                <div className="chemname">
                    <Container >
                        <Row>
                            <Row>
                                <Col className="chass">Indian Institute Of Chemical Engineering  &</Col>
                            </Row>
                            <Row>
                                <Col sm={12} className="chemdep">Chemical Engineering Association</Col>
                            </Row>

                        </Row>
                    </Container>
                </div>
                <h3 className="det">Event Details</h3>
                <div className="details">

                    <div className="reg">
                        <h3 className="bot">Event Date and Venue</h3>
                        DATE : 24 MARCH 2023 <br />
                        VENUE : MAHARAJA   AUDITORIUM
                    </div>
                    <div className="reg">
                        <h3 className="bot">Registration Fees</h3>
                        For IIChE Membership <b className="clg1" >Rs.200</b>   <br />
                        For Non-IIChE Membership <b  className="clg1">Rs.250</b> <br />
                        Including Food <br />
                        For hostel stay extra fees
                    </div>
                    <div className="regp">
                        <h3 className="bot1">Payment</h3>
                        <div className="row">
                            <div className="col-7 paydetails">
                                <b>Scan the QR code for payment</b> <br />
                                <small>Payee Name : DEENADHAYALAN RAMACHANDRAN</small> <br />
                                <small>Payee Number : 9994041738</small> <br />
                                <small>UPI ID : deenadhayalan18101@okhdfcbank</small> <br />
                                <b className="clg1">Note:</b> <br />
                                Please attach the payment screenshot in the given registration form.

                            </div>
                            <div className="col-5">
                                <img src={pay} alt="payment" className="payment" />
                            </div>
                        </div>

                    </div>
                </div>




                <div>
                    <a href="#event">
                        <div className='scrolldown'>
                            <div className="chevrons">
                                <div className='chevrondown'></div>
                                <div className='chevrondown'></div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            {/*-------------------------------- Event page-------------------------------- */}
            <div id="event" className="events">
                <section className="dark">
                    <div className="container py-4">
                        <h1 className="clg1" id="pageHeaderTitle">Syllogic Events</h1>

                        <article className="postcard gold">
                            <img className="postcard__img" src={Tech} alt="Title" />
                            <div className="postcard__text">
                                <h3 className="clg1">Technical Events</h3>
                                <div className="postcard__bar"></div>
                                <div className="postcard__preview-txt pt-5">
                                    <ol>
                                        <li>
                                            Paper Presentation
                                        </li>
                                        <li>
                                            Poster Presentation
                                        </li>
                                    </ol>

                                    <small>The participants can participate in both paper and poster presentation.</small> <br /> <br />
                                    <small>
                                        <b className="clg1">Note:</b> <br />
                                        Chemical domain related papers and posters are only accepted. <br />
                                                </small>



                                </div>
                                <ul className="postcard__tagbox">
                                    <Button className="button2" onClick={tech}>Register</Button>
                                </ul>
                            </div>
                        </article>
                        <article className="postcard ">
                            <img className="postcard__img" src={Non} alt="Title" />
                            <div className="postcard__text">
                                <h3 className="clg1">Non technical events</h3>
                                <div className="postcard__bar"></div>
                                <div className="postcard__preview-txt">
                                    <ol>
                                        <li>
                                            Quiz
                                        </li>
                                        <li>
                                            Attain Brain
                                        </li>
                                        <li>
                                            Minute to Win'It
                                        </li>
                                    </ol>
                                    <small>The participants can participate in all non technical events</small>
                                </div>
                                <ul className="postcard__tagbox">
                                    <Button className="button2" onClick={nontech}>Register</Button>
                                </ul>
                            </div>
                        </article>

                    </div>
                </section>

            </div>

            {/* upcoming events */}


            <div className="container">
                <br />
                <b className="clgcont">UPCOMING EVENT</b>
                <iframe className="framev w-100 mt-3" src="https://www.youtube.com/embed/sCpRzUfzi4s?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="true"></iframe>


            </div>

            <div className="about">
                <div className="ab1 row mt-2.8" style={{ width: "100%", padding: "1% 3% 1% 3%" }}>
                    <h5 className="heading">ABOUT THE INSTITUTION</h5>
                    <p className="para">
                        Kongu Engineering College (KEC) was established in the year 1984. Approved by AICTE, New Delhi and affiliated to Anna University, Chennai. The Institution has completed 39 years of dedicated and excellent service in the field of technical education. It offers 14 UG, 19 PG and 16 Research programmes in Engineering, Applied Sciences and Management branches. The Institution has got NBA accreditation for UG programme, Best Engineering College award and the Best Principal Award twice. The Institution is one among the best in imparting high quality technical education in Tamil Nadu and it is ranked high among the Engineering Institutes including IITs, NITs, Central Universities by various surveys conducted by magazines such as Outlook, The Week, Competition Success Review etc. The institution has established a Technology Business Incubator (TBI) supported by Department of Science and Technology (DST) Government of India.
                    </p>
                    <h5 className="heading">ABOUT THE DEPARTMENT</h5>
                    <p className="para" style={{ textAlign: "justify" }}>
                        The Department of Chemical Engineering was started in the academic year 1994-95. It offers B.Tech, M.Tech
                        and Ph.D degree programmes recognized by Anna University, Chennai. Besides teaching, the department is actively
                        involved in industrial consultancy, and conducting training programmes including various sponsored seminar and
                        workshops for students and practicing engineers. Numerous funded projects from MoEF, AICTE and UGC has been
                        completed successfully and few are in progress. The department has advanced simulation softwares such as Fluent,
                        HYSIS, ASPEN plus, HTRI, gPROM and PROSIM.
                    </p>

                </div>

            </div>





            {/* contact */}
            <div className="images">

                <b className="clgcont">DEPARTMENT HOD</b>

                <div className="row mt-3  ">
                    <div className="col-lg-12 col-md-3">
                        <img className="staffs" src={hod} alt="" />
                        <br></br>
                        <small className="clg1">Dr. K. KANNAN
                        </small>

                    </div>
                </div>

                <div className="row mt-5">
                    <b className="clgcont">STAFF COORDINATORS</b>
                    <div className="col-lg-4 col-md-3 mt-3 ">
                        <img className="staffs" src={sc1} alt="" />
                        <br></br>

                        <small className="clg1">Dr. A. S. PERIASAMY MANIKANDAN<br></br>
                            Associate Proffesor
                            Departmnt of Chemical Engineering</small>

                    </div>
                    <div className="col-lg-4 col-md-3 mt-3">
                        <img className="staffs" src={sc2} alt="" />
                        <br></br>
                        <small className="clg1">S. MOTHIL <br></br>
                            Assistant Professor
                            Departmnt of Chemical Engineering</small>


                    </div>
                    <div className="col-lg-4 col-md-3 mt-3">
                        <img className="staffs" src={sc3} alt="" />
                        <br></br>
                        <small className="clg1">T. SATHISH<br></br>
                            Assistant Professor
                            Departmnt of Chemical Engineering</small>

                    </div>

                </div>

            </div>

            <div className="contact">
                <div className="row">


                    <div className="col-lg-6 col-md-12 p-5">

                        <div className="row">



                            <div className="conus">
                                <b className="clgcont">CONTACT US</b>
                                <h3 className="clgcont1 mt-2" > Student Coordinators</h3>
                                <h5 className="coname">Mr R.Deenadhayalan - +91 99940 41738</h5>
                                <h5 className="coname mt-2">Mr R.Pavendiran - +91 93602 74496</h5>
                                <h5 className="coname mt-2">Ms A.Priyanga  - +91 93613 66206</h5>
                                <h5 className="coname mt-2">Mr U.Dinakaran - +91 86085 08021</h5>
                                <h5 className="coname mt-2">Mr M.Sriram - +91 97917 31049</h5>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-6">
                                <a href="mailto:syllogic2023@gmail.com" className="social1">
                                    <img className="social1img" src={mail} alt="gmail" />
                                    <br />
                                    <small className="clg1">
                                        syllogic2023@gmail.com
                                    </small>
                                </a>
                            </div>
                            <div className="col-6 mt-1" >
                                <a className="social" href="https://www.instagram.com/kec_chem_official/?igshid=YmMyMTA2M2Y%3D">
                                    <img className="socialimg" src={insta} alt="insatagram" />
                                    <br />
                                    <small className="clg1">
                                        kec_chem_official
                                    </small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <iframe title="myFrame" className="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.826470171063!2d77.60483861480529!3d11.27416319198491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d7810fe32d5%3A0x85cf49c5b26fb72e!2sKongu%20Engineering%20College!5e0!3m2!1sen!2sin!4v1675595314904!5m2!1sen!2sin"
                        ></iframe>
                    </div>
                </div>
            </div>
            <small className="clg1">D & D -  @20IT</small>
        </>
    );
}
