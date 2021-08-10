import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';



function QnaDetail(props) {
  let {id} = useParams();
  let [title, changeTitle] = useState(props.qnaData[id-1].title);
  let [content, changeContent] = useState(props.qnaData[id-1].content);
  let [viewCount, changeviewCount] = useState(props.qnaData[id-1].viewCount);
  let [userUniqueId, changeuserUniqueId] = useState(props.qnaData[id-1].userUniqueId);
  let history = useHistory();

  return (
    <div>
      
      <h4 className='specificQnaInput'>
        <Container>
          <Row className='qnatitle'>
            <Col>{title}</Col>
          </Row>
          <Row className='smallText'>
            <Col xs={3}>작성자: {userUniqueId} | 작성일: 2016-02-07</Col>
            <Col></Col>
            <Col xs={1}>조회수: {viewCount}</Col>
            <Col xs={1}>글번호: {id}</Col>
          </Row>
          <Row>
            <Col className='qnaContent'>
              문의{content},
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, ante lacinia dignissim commodo, arcu erat porta lacus, 
              eget viverra erat est quis orci. Etiam tempor, erat non hendrerit ullamcorper, nunc ex lacinia lectus, et vestibulum eros justo ac tellus. 
              Integer vel gravida mauris, ut commodo est. Nunc pharetra sapien eu dolor feugiat venenatis. Integer eget dui quis ex auctor scelerisque. 
            </Col>
          </Row>
          <Row className='underLine'></Row>
        </Container>
        &nbsp;
        <p></p>
        <Button onClick={ ()=>{ history.goBack(); } }>뒤로 가기</Button>
      </h4>

      <h4>

      </h4>
    </div>
  )
}








export default QnaDetail