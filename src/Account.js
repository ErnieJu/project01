import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';
import { Link, Route, Switch, useHistory } from 'react-router-dom';

function account() {
    //let [modal, changeModal] = useState(true);


    return (
        <div>
            <Container>
                <Row>
                    <Col xs={2}>
                        <ListGroup className="sideBar">

                            { /*
                            <ListGroup.Item action href='/link1'>
                                Link 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="/link2">
                                Link 2
                            </ListGroup.Item>
                            <ListGroup.Item action href="/link3">
                                Link 3
                            </ListGroup.Item>
                            */ }

                            <Button className="sideBars" onClick={ ()=>{  } }>
                                회원 정보 수정
                            </Button>
                            <Button className="sideBars" onClick={ ()=>{  } }>
                                주문 내역
                            </Button>
                            <Button className="sideBars" onClick={ ()=>{  } }>
                                Menu 3
                            </Button>
                            <Button className="sideBars" onClick={ ()=>{  } }>
                                Menu 4
                            </Button>
                        </ListGroup>
                    </Col>
                    <Col xs={6}>
                        12345678912345679
                    </Col>
                    <Col>
                        3216549786321654978
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

function Modal() {
    return (
        <div className="modal">
            <h2>My Account</h2>
            <p>date</p>
            <p>something</p>
        </div>
    )
}


  export default account;