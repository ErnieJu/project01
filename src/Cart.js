import React, { useState } from 'react';
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import {connect} from 'react-redux';

function Cart(props) {
    let history = useHistory();
    let product = useState(['']);
    let {id} = useParams();

    return(
        <Container fluid="md" className='cart_back'>
            <Row>
                <Col>
                    <h1>
                        My Cart    
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={2} >
                    left
                </Col>
                <Col xs={8} className='cart_middle'>
                    
                    {/* 
                    props.state.map((a,i)=>{
                        return (
                            <tr key={i}>
                                <td>{ a.id }</td>
                                <td>{ a.name }</td>
                                <td>{ a.id }</td>
                            </tr>
                        )
                    })
                */}
                   
                </Col>
                <Col xs={2}>
                    right
                </Col>
            </Row>
            <Row>
                <Col> 
                    <Button onClick={ ()=>{ history.push('/') } }>결제하기</Button>
                    &nbsp;
                    <Button>뒤로가기</Button></Col>
            </Row>
        </Container>
    )
}


export default Cart;