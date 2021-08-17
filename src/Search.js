import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Search(props) {

<div>

{props.searchInput}

  <Container className='qnaList'>
    <Row className='qnacategory'>
      <Col>{props.searchInput}</Col>
      <Col xs={6}>글제목</Col>
      <Col>글쓴놈</Col>
      <Col>시간</Col>
      <Col xs={1}>조회수</Col>
    </Row>
  </Container>

</div>
}






export default Search;