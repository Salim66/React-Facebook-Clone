import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../../Header/Header';
import './Profile.css';

const Profile = () => {

    let { userId } = useParams();

    const [user, setUser] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:5050/facebooks/' + userId )
        .then(data => data.json())
        .then(data => setUser(data));

    }, []);

    return (
        <>
            <Header></Header>
            <section className="section-profile shadow">
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <div className="profile-top__section">
                            <img src={ user.image } alt="" />
                        </div>
                        <div className="profile-top__details">
                            <h3>{ user.name }</h3>
                            <p>believe myself</p>
                            <a href="#">Edit</a>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="section-profile__body">

            </section>
        </>
    )
};

export default Profile;
