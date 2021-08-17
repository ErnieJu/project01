import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


function Search(props){

  let [searchResult, changesearchResult] = useState('');

  const axios = require("axios");
  useEffect(()=>{axios.get('http://localhost:8080/api/product/findAll')
                  .then(({ data })=>{ 
                    changesearchResult(data) 
                  })
                  .catch()},[]);

<div>

  <Container className='qnaList'>
    <Row className='qnacategory'>
      <Col>{props.searchInput}</Col>
      <Col xs={6}>{searchResult}</Col>
      <Col>글쓴놈</Col>
      <Col>시간</Col>
      <Col xs={1}>조회수</Col>
    </Row>
  </Container>

</div>
}






export default Search