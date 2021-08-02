import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';



const Home = () =>{

    //Function & Variable Declaration
    const history = useHistory();

    const profileFunc = () => {
        history.push('./Profile')
};
    const aboutFunc = () => {
        history.push('./About')
};

    return (
        <Container>
            <Row >

                <div className={'header'}>
                <Col xs={2} sm={4}>
                    <div className={'profilePic'}>
                <img src={'/logo192.png'} alt={'logo'}/>

                    </div>
                </Col>
                <Col xs={12} sm={8}>
                    <div className="header-content">
                        <Row>
                            <Col xs={12}>
                                <h1> CALVIN M SEABALA</h1>
                                <h4>Software Developer & System Analyst</h4>
                            </Col>
                            <Col xs={12}>
                                <p>Born and raised in Mankweng Turfloop, East Side of Polokwane city in Limpopo Province.
                                    Calvin fell in love with computers and coding from a very young age, he started by coding
                                    a simple calculator app when he was 6 years old, then Sudoku when he was 9 years...
                                    His Achievements & Accomplishments are far too many they can fill terabyte in storage <br/><br/>

                                    <Button variant="outline-primary" onClick={profileFunc}>Profile</Button>  &nbsp;
                                    <Button variant="outline-primary" onClick={aboutFunc}>About</Button>
                                </p>

                            </Col>
                        </Row>
                    </div></Col>
            </div>


                <Col xs={12} md={4}>
                    <div className="content-item">
                        <h4>Software Developer</h4>
                        <hr/>
                        <p>
                            Software engineers create the programs which turn computers into useful machines that can,
                            among other things, send email,
                            search the world wide web..
                        </p>

                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="content-item">
                        <h4>System Analyst</h4>
                        <hr/>
                        <p>
                        Computer systems analysts work with companies, institutions, and independent clients.
                        They survey and diagnose database program issues,
                        resolve user issues.
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="content-item">
                        <h4>Other Skills</h4>
                        <hr/>
                        <ol>

                            <li> Team Player</li>
                            <li>Motivated</li>
                            <li>Communication</li>
                            <li>Creativity</li>
                            <li>Leadership</li>

                        </ol>


                    </div>
                </Col>
            </Row>

        </Container>
    )
}
export default Home;