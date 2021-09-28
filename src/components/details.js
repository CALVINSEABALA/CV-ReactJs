import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faGlobeAfrica, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faMailchimp} from "@fortawesome/free-brands-svg-icons/faMailchimp";

function Details(props) {
    return (
        <Container>

            <Row className="justify-content-center"y>
                <Col xs={12} sm={4} align-items="center">
                    <header>
                        <div className="user">
                            <img src="assets/background.jpg" className="profilePic" alt={"profile"}/>
                                <h3 className="name" style={{marginTop:"15px"}}>Calvin Seabala</h3>
                                <p className="post">Full Stack Developer</p>
                        </div>

                        <nav className="navbar">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="./About">About</Link></li>
                                <li><Link to="./UserDetails">Users</Link></li>
                            </ul>
                        </nav>
                    </header>
                </Col>

                <Col xs={12} sm={8}>


                    <div className="containers">
                        <section className="home" id="home">
                            <h3 className="name" style={{color:"#ffffff"}}>Hello</h3>
                            <h3 className="post" style={{color:"#ffffff"}}>My Name is <span> CALVIN M SEABALA</span></h3>
                            <h3 className="post" style={{color:"#ffffff"}}>I am a <span className="typing-text">Full Stack Developer </span></h3>
                            <a href="mailto:seabalacalvin@gmail.com">
                                <button className="btn-hire">Hire Me</button>
                            </a>

                            <div className="share">
                                <a href="tel:0680166894"><FontAwesomeIcon icon={faPhone}/></a>
                                <a href="https://www.instagram.com/calvin_seabala/"><FontAwesomeIcon icon={faInstagram}/></a>
                                <a href="https://www.linkedin.com/in/calvin-m-seabala-55311290?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B33zBto%2FXSDKQt5LvwTWH2g%3D%3D">
                                    <FontAwesomeIcon icon={faLinkedinIn}/>
                                </a>
                                <a href="https://calvinseabala.github.io/"><FontAwesomeIcon icon={faGlobeAfrica}/></a>
                                <a href="mailto:seabalacalvin@gmail.com"><FontAwesomeIcon icon={faMailchimp}/></a>


                            </div>
                        </section>


                    </div>


                </Col>

            </Row>

        </Container>
    );
}

export default Details;