import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img1 from './assets/baby.jpg'


const LandingPage = () =>{
    return (
       <>
         <Container fluid id='landing'>
            <Row>
                <Col id='parent' sm={8}>
                    <div id='name' className='text-center'>
                        <h1>A NAME of more than just an ID. <span id='moto'>Name is power</span></h1>
                        <div>
                        <h3 id='log'>Names too good, you'll want to have more KIDS</h3> 
                    </div>
                    </div>
                   
                </Col>
                <Col sm={4}>
                    <div id='mom'>
                        <img alt='' src={img1}/>
                    </div>
                </Col>
            </Row>
           
        </Container> 
        <Container fluid>
            
<footer class="footer-distributed">

            <div class="footer-left">

                <h3>Name<span>It</span></h3>

                <p class="footer-links">
                    <a href="#" class="link-1">Home</a>
                    
                    <a href="#">Blog</a>
                
                    <a href="#">Pricing</a>
                
                    <a href="#">About</a>
                    
                    <a href="#">Faq</a>
                    
                    <a href="#">Contact</a>
                </p>

                <p class="footer-company-name">NameIt © 2022</p>
            </div>

            <div class="footer-center">

                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>444 S. TM Ave</span> Nairobi, Kenya</p>
                </div>

                <div>
                    <i class="fa fa-phone"></i>
                    <p>+254712345678</p>
                </div>

                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">support@company.com</a></p>
                </div>

            </div>

            <div class="footer-right">

                <p class="footer-company-about">
                    <span>About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>

                <div class="footer-icons">

                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>

                </div>

            </div>

        </footer>
</Container>   
       </> 
                

    )
}

export default LandingPage;

