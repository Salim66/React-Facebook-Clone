import React, { useState, useEffect } from 'react';
import { faComment, faCommentAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Navbar, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import LeftSidebar from '../../Sidebar/Home-Sidebar/LeftSidebar';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
       
        fetch('http://localhost:5050/facebooks')
        .then(data => data.json())
        .then(data => setUsers(data));

    }, [])


    return (
        <>
            <Header></Header>
            <section className="body-section">
                <Row>
                    <Col md={3}>
                        <LeftSidebar></LeftSidebar>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={1}></Col>
                            <Col md={10}>
                                <section className="home-post__card">
                                    <Card>
                                        <Card.Body>
                                            <div className="search__panel">
                                                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/cp0/p40x40/270215733_3169984863238159_8299662076591110375_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFmScv5H0RYwKL5MKPFWkM0AiMd2x6SbsYCIx3bHpJuxkhGNkI9-11UFYsJz7pqLE_4aN0VC8bzUT28Q9ienMdB&_nc_ohc=HpenoWorcFgAX87x8AK&_nc_ht=scontent.fdac14-1.fna&oh=00_AT_eKtSgPCPITEZVWI4IkG8jdHWlH1WCdn6oPJxrrQHFBg&oe=61DF013E" alt="" />
                                                <input type="text" placeholder="What's your mind, Selim?" disabled />
                                            </div>
                                            <hr />
                                            <div className="media__panel">
                                                <ul className="panel-list">
                                                    <li className="panel-item">
                                                        <a href="#" className="panel-link live">
                                                            <svg viewBox="0 0 24 24" width="1em" height="1em" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 i2fa72qc rgmg9uty b73ngqbp"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z" transform="translate(354 158.5)"></path><path d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5" transform="translate(354 158.5)"></path></g></g></svg>
                                                            <p>Live video</p>
                                                        </a>
                                                    </li>
                                                    <li className="panel-item">
                                                        <a href="#" className="panel-link photo">
                                                            <svg viewBox="0 0 24 24" width="1em" height="1em" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 n90h9ftp rgmg9uty b73ngqbp"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z" transform="translate(352 156.5)"></path><path fill-rule="nonzero" d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z" transform="translate(352 156.5)"></path></g></g></svg>
                                                            <p>Photo/video</p>
                                                        </a>
                                                    </li>
                                                    <li className="panel-item">
                                                        <a href="#" className="panel-link feeling">
                                                            <svg viewBox="0 0 24 24" width="1em" height="1em" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 ky11obwa rgmg9uty b73ngqbp"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z" transform="translate(353.5 156.5)"></path><path fill-rule="nonzero" d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z" transform="translate(353.5 156.5)"></path><path d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192" transform="translate(353.5 156.5)"></path></g></g></svg>
                                                            <p>Feeling/activity</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </section>

                                {

                                    users.map(data => 
                                        
                                        <section className="home-post__show">
                                            <Card>
                                                <Card.Header className="home-post__header">
                                                    <div className="home-post__details">
                                                        <NavLink to={ data.id }>
                                                            <img src={ data.logo } alt="" />
                                                        </NavLink>
                                                        <div className="home-post__name">
                                                            <p>{ data.name } <br /> <span>January 9 at 12:16 pm</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="home-post__title">
                                                        <h4>{ data.title }</h4>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body className="home-post__show-body">
                                                    <div className="post__image">
                                                    <NavLink to={ data.id }><img src={ data.image } alt="postimage" /></NavLink>
                                                    </div>                                            
                                                </Card.Body>
                                                <Card.Footer className="home-post__footer">
                                                    <div className="footer-top__panel">
                                                        <a href="#">
                                                            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" alt="" />
                                                        </a>
                                                        <a href='#' className="comment-area">
                                                            <p>12 Comments</p>
                                                        </a>
                                                    </div>
                                                    <hr />
                                                    <div className="footer-bottom">
                                                        <ul className="footer-bottom__panel">
                                                            <li className="footer-panel__item">
                                                                <a href="#" className="footer-panel__link">
                                                                    <FontAwesomeIcon className='icon' icon={ faThumbsUp }></FontAwesomeIcon>
                                                                    <p>Like</p>
                                                                </a>
                                                            </li>
                                                            <li className="footer-panel__item">
                                                                <a href="#" className="footer-panel__link">
                                                                    <FontAwesomeIcon className='icon' icon={ faCommentAlt }></FontAwesomeIcon>
                                                                    <p>Comment</p>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </section>
                                        
                                    )

                                }
                               


                            </Col>
                            <Col md={1}></Col>
                        </Row>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </section>
        </>
    )
};

export default Home;
