import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';



function QnaDetail(props) {
  let [title, changeTitle] = useState('');
  let [content, changeContent] = useState('');
  let history = useHistory();
  return (
    <h4 className='specificrQnaInput'>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=>{ changeTitle(`${e.target.value}`) }}>
        <Form.Label>제목</Form.Label>
        <Form.Control type="email" placeholder="제목을 입력하세요" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={(e)=>{ changeContent(`${e.target.value}`) }}>
        <Form.Label>내용</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button onClick={()=>{ 
      axios.post('/user', {
        title: title,
        content: content
      })
      .then(function (response) {
        console.log(title);
        console.log(content);
      })
      .catch(function (error) {
        console.log(title);
        console.log(content);
      });
    }}>전송</Button>
    &nbsp;
    <Button onClick={ ()=>{ history.goBack(); } }>뒤로 가기</Button>
  </h4>
  )
}








export default QnaDetail