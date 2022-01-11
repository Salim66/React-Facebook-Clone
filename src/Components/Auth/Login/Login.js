import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className="section-login">
                <Container>
                    <Row>
                        <Col md={7}>
                           <div className="login-bar">
                                <h1 className="login-title">Facebook</h1>
                                <h2 className="login-caption">Facebook helps you connect and share with the people in your life.</h2>
                           </div>
                        </Col>
                        <Col md={5}>
                            <div className="login-form">
                                <Card className='shadow'>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group className='mb-3'>
                                                <Form.Control type="text" placeholder="Email address or phone number" />
                                            </Form.Group>
                                            <Form.Group className='mb-3'>
                                                <Form.Control type="text" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group className='mb-3'>
                                                <Link to="/home"><Button variant='primary' className="login-button">Log In</Button></Link>
                                            </Form.Group>
                                            <Form.Group className='mb-3'>
                                                <a href="#">Forgotten password?</a>
                                            </Form.Group>
                                            <Form.Group className='mb-3'>
                                                <hr />
                                            </Form.Group>
                                            <Form.Group className='mb-3'>
                                                <Button className="create-button" onClick={handleShow}>Create New Account</Button>
                                            </Form.Group>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                                <span><a href="#" className='create-link'>Create a Page</a> for a celebrity, brand or business.</span>
                        </Col>
                    </Row>
                </Container>
                
            </section>
            <Modal show={show} onHide={handleClose} centered animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title className='sign-up__title'>Sign Up</Modal.Title><br/>
                    <h6 className='d-block'>It's quick and easy</h6>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="First name"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Surname"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={12} className="mb-3">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Mobile number or email address"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={12} className="mb-3">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="New password"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={12} className="mb-3">
                                <Form.Group>
                                    <Form.Label className="d-block">Date of birth</Form.Label>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Control type="date"></Form.Control>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Control type="month"></Form.Control>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Control type="number" min="1900" max="2099" step="1"></Form.Control>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                            <Col md={12} className="mb-3">
                                <Form.Group>
                                    <Form.Label className="d-block">Gender</Form.Label>
                                    <Row>
                                        <Col md={4}>
                                            <div className='form-gender'>
                                                <label htmlFor="Female" className='form-control'>Female &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id='Female' name='gender' type="radio" /></label>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className='form-gender'>
                                                <label htmlFor="Male" className='form-control'>Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id='Male' name='gender' type="radio" /></label>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className='form-gender'>
                                                <label htmlFor="Custom" className='form-control'>Custom &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name='gender' id='Custom' type="radio" /></label>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <p className="form-desc">
                                            By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.
                                            </p>
                                        </Col>
                                        <Col md={12}>
                                            <div className='form-button'>
                                                <Button>Sign Up</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="top-footer">
                                <ul>
                                    <li><a href="#">English (UK)</a></li>
                                    <li><a href="#">বাংলা</a></li>
                                    <li><a href="#">অসমীয়া</a></li>
                                    <li><a href="#">हिन्दी</a></li>
                                    <li><a href="#">नेपाली</a></li>
                                    <li><a href="#">Bahasa Indonesia</a></li>
                                    <li><a href="#">العربية</a></li>
                                    <li><a href="#">中文(简体)</a></li>
                                    <li><a href="#">Bahasa Melayu</a></li>
                                    <li><a href="#">Español</a></li>
                                    <li><a href="#">Português (Brasil)</a></li>
                                </ul>
                            </div>
                            <hr />
                            <div className="top-middle">
                                <ul>
                                    <li><a href="#">Sign</a></li>
                                    <li><a href="#">UpLog</a></li>
                                    <li><a href="#">InMessenger</a></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Lite</a></li>
                                    <li><a href="#">Watch</a></li>
                                    <li><a href="#">Places</a></li>
                                    <li><a href="#">Games</a></li>
                                    <li><a href="#">Marketplace</a></li>
                                    <li><a href="#">Facebook Pay</a></li>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Oculus</a></li>
                                    <li><a href="#">Portal</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">Bulletin</a></li>
                                    <li><a href="#">Local</a></li>
                                    <li><a href="#">Fundraisers</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Voting</a></li>
                                    <li><a href="#">Information</a></li>
                                    <li><a href="#">Centre</a></li>
                                    <li><a href="#">Groups</a></li>
                                    <li><a href="#">Create ad</a></li>
                                    <li><a href="#">Create</a></li>
                                    <li><a href="#">Page</a></li>
                                    <li><a href="#">Developers</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Cookies</a></li>
                                    <li><a href="#">AdChoices</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Help</a></li>
                                    <li><a href="#">Settings</a></li>
                                </ul>
                            </div>                           
                            <p className='meta-footer'>Meta &copy; 2021</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
};

export default Login;

