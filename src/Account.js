import { ListGroup, Button, Container, Row, Col, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useHistory, useParams } from 'react-router-dom';

function Account(props) {
  let [userInfo, changeuserInfo] = useState(false);
  let [orderInfo, changeorderInfo] = useState(false);
  let [info, changeInfo] = useState(false);
  let [userUniqueId, changeuserUniqueId] = useState('');
  let [name, changeName] = useState('');
  let [password, changePassword] = useState('');
  let [password2, changePassword2] = useState('');
  let [userEmail, changeuserEmail] = useState('');
  let history = useHistory();

  return (
    <div>
      <Container>
        <Row>
          <Col xs={2}>
            <h5>메뉴를 선택해주세요</h5>
            <ListGroup className="sideBar">
              <Button className="sideBars" onClick={ ()=>{ changeuserInfo(true); changeorderInfo(false); changeInfo(false); } } >
                회원 정보 수정
              </Button>
              <Button className="sideBars" onClick={ ()=>{ changeuserInfo(false); changeorderInfo(true); changeInfo(false); } }>
                비밀 번호 변경
              </Button>
              <Button className="sideBars" onClick={ ()=>{ changeuserInfo(false); changeorderInfo(false); changeInfo(true); } }>
                이메일 변경
              </Button>
              <Button className="sideBars" onClick={ ()=>{ history.push('/my-cart') } }>
                장바구니
              </Button>
            </ListGroup>
          </Col>
          <Col xs={6}>
          {
            userInfo === true
            ? <Modal1 userUniqueId={userUniqueId} changeuserUniqueId={changeuserUniqueId} name={name} changeName={changeName}></Modal1>
            : null
          }
          {
            orderInfo === true
            ? <Modal2 password={password} changePassword={changePassword} password2={password2} changePassword2={changePassword2}></Modal2>
            : null
          }
          {
            info === true
            ? <Modal3 userEmail={userEmail} changeuserEmail={changeuserEmail}></Modal3>
            : null
          }
          </Col>
        </Row>
      </Container>


    </div>
  )
}



function Modal1(props) {

  return (
    <h4 className='qnaInput'>
      <Form>
        <p className='qnaCreate'>
          회원 정보 수정
        </p>
        <div className='littleAlert'>
          <p className='qnaAlert'>
            개인 정보를 수정할 수 있습니다.
          </p>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={(e)=>{ props.changeName(`${e.target.value}`) }}>
          <Form.Label>이름</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={(e)=>{ props.changeuserUniqueId(`${e.target.value}`) }}>
          <Form.Label>아이디</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button onClick={()=>{ 
        axios.post('/user', {
          name: props.name,
          userUniqueId: props.userUniqueId
        })
        .then(function (response) {
          console.log(props.name);
          console.log(props.userUniqueId);
        })
        .catch(function (error) {
          console.log(props.name);
          console.log(props.userUniqueId);
        });
      }}>저장</Button>
    </h4>
  )
}


function Modal2(props) {

  return (
    <h4 className='qnaInput'>
      <Form>
        <p className='qnaCreate'>
          비밀번호 변경
        </p>
        <div className='littleAlert'>
          <p className='qnaAlert'>
            개인 정보를 수정할 수 있습니다.
          </p>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={(e)=>{ props.changePassword(`${e.target.value}`) }}>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={(e)=>{ props.changePassword2(`${e.target.value}`) }}>
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control as="textarea" rows={3} />
          <h5>
            {
              props.password == props.password2
              ? null
              : '비밀 번호가 다릅니다'
            }
          </h5>
        </Form.Group>
      </Form>
      <Button onClick={()=>{ 
        axios.post('/user', {
          password: props.password,
          password2: props.password2
        })
        .then(function (response) {
          console.log(props.password);
          console.log(props.password2);
        })
        .catch(function (error) {
          console.log(props.password);
          console.log(props.password2);
        });
      }}>저장</Button>
    </h4>
  )
}
function Modal3(props) {

  return (
    <h4 className='qnaInput'>
      <Form>
        <p className='qnaCreate'>
          배송 주소 변경
        </p>
        <div className='littleAlert'>
          <p className='qnaAlert'>
            개인 정보를 수정할 수 있습니다.
          </p>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={(e)=>{ props.changeuserEmail(`${e.target.value}`) }}>
          <Form.Label>E-mail</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button onClick={()=>{ 
        axios.post('/user', {
          userEmail: props.userEmail
        })
        .then(function (response) {
          console.log(props.userEmail);
        })
        .catch(function (error) {
          console.log(props.userEmail);
        });
      }}>저장</Button>
    </h4>
  )
}


  export default Account;