import React, { useEffect, useState } from 'react';
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import CartData from './CartData.js';
import axios from 'axios';



function Cart(props) {
  let history = useHistory();
  let product = useState(['']);
  let {id} = useParams();
  let [cartData, changecartData] = useState(CartData);

  const axios = require("axios");
  useEffect(()=>{axios.get('http://localhost:8080/api/product/findAll')
                  .then(({ data })=>{ 
                    changecartData(data) 
                  })
                  .catch()},[]);

  let detailPrdt = CartData.find(function(result){
    return(result.id == id -1)
  });


  return(
    <Container fluid="md" className='cart_back'>
      <Row>
        <Col>
          <h1>
            My Cart    
          </h1>
        </Col>
      </Row>

      <Container className='qnaList'>
        <Row className='qnacategory'>
          <Col xs={2}></Col>
          <Col xs={8}>제품 목록</Col>
          <Col xs={2}></Col>
        </Row>
      </Container>

        <Row>
          <Col xs={2} >
            left
          </Col>
          <Col xs={8} className='cart_middle'>
             <Col>
             {cartData[2].name}
             </Col>
                
          </Col>
          <Col xs={2}>
            right
          </Col>
        </Row>
      <Row>
        <Col> 
          <Button onClick={ ()=>{ history.push('/') } }>결제하기</Button>
          &nbsp;
          <Button onClick={ ()=>{ history.goBack() } }>뒤로가기</Button>
        </Col>
      </Row>
    </Container>
  )
}


export default Cart;