import React, { useEffect, useState } from 'react';
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import CartData from './CartData.js';
import axios from 'axios';
import ReactPaginate from 'react-paginate';



function Cart(props) {
  let history = useHistory();
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


  const [results, setResults] = useState(cartData.slice(0,50));
  const [pageNumber, setPageNumber] = useState(0);

  const resultsPerPage = 5;
  const resultsVisit = pageNumber * resultsPerPage;

  const showCart = results
  .slice(resultsVisit, resultsVisit + resultsPerPage)
  .map((results) => {
    return (
      <Container results={results} detailPrdt={detailPrdt}>
        <Link to={('/detail/' + (results.id +1))} className='noUnderline'>
          <Row onClick={ ()=>{  } } className='qnabox'>
            <Col xs={2} className="text-Left">{results.name}</Col>
            <Col xs={8} className="text-Left">{results.description}</Col>
            <Col xs={2} className="text-Right">{results.cost} 원</Col>
          </Row>
        </Link>
      </Container>
    );
  });

  const pageCount = Math.ceil(results.length / resultsPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected)
  };



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

        <Row className='detailQnA'>
          &nbsp;
          {showCart}
          &nbsp;
          <Container className="pleaseCenter">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButtons"}
              previousLinkClassName={"PreviousButton"}
              nextLinkClassName={"nextButton"}
              activeClassName={"activeButton"}
            />
          </Container>
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