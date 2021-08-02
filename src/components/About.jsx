import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';


const About = () =>{

    return (
        <Container>


            <Row className="justify-content-center">

                <Col xs={12} sm={4}> 1 2 3 4 5 6 7 8 9 10 </Col>
                <Col xs={12} sm={8}> 1  9 8 7 6 5 4 3 2 1</Col>

            </Row>

        </Container>
    )
}
export default About;