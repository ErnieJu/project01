import { ListGroup, Button, Container, Row, Col, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useHistory, useParams } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';

function Account(props) {
  let [userInfo, changeuserInfo] = useState(false);
  let [orderInfo, changeorderInfo] = useState(false);
  let [info, changeInfo] = useState(false);
  let [addressInput, changeaddressInput] = useState(false);
  let [purchaserec, changePurchaserec] = useState(false);
  let [userUniqueId, changeuserUniqueId] = useState('');
  let [name, changeName] = useState('');
  let [password, changePassword] = useState('');
  let [password2, changePassword2] = useState('');
  let [userEmail, changeuserEmail] = useState('');
  let history = useHistory();
  let [address1, changeaddress1] = useState();
  let [address2, changeaddress2] = useState('');
  let [address3, changeaddress3] = useState('');
  


  const handleComplete = (data) => {
      let fullAddress = data.address;
      let extraAddress = "";

      if (data.addressType === "R") {
        if (data.bname !== "") {
          extraAddress += data.bname;
        }
        if (data.buildingName !== "") {
          extraAddress +=
            extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      }
      changeaddress1(data.zonecode);
      changeaddress2(fullAddress);
      changeaddressInput(true);
    };


  return (
    <div>
      <Container>
        <Row>
          <Col xs={2}>
            <h5>메뉴를 선택해주세요</h5>
            <ListGroup className="sideBar">
              <Button className="sideBars" onClick={ ()=>{ changeuserInfo(true); changeorderInfo(false); changeInfo(false); changeaddressInput(false); changePurchaserec(false); } } >
                회원 정보 수정
              </Button>
              <Button className="sideBars" onClick={ ()=>{ changeuserInfo(false); changeorderInfo(true); changeInfo(false); changeaddressInput(false); changePurchaserec(false); } }>
                비밀 번호 변경
              </Button>
              <Button className="sideBars" onClick={ ()=>{ changeuserInfo(false); changeorderInfo(false); changeInfo(true); changeaddressInput(false); changePurchaserec(false); } }>
                이메일 변경
              </Button>
              <Button className="sideBars" onClick={ ()=>{ changeuserInfo(false); changeorderInfo(false); changeInfo(false); changeaddressInput(true); changePurchaserec(false); } }>
                주소지 입력
              </Button>
              <Button className="sideBars" onClick={ ()=>{ changeuserInfo(false); changeorderInfo(false); changeInfo(false); changeaddressInput(false); changePurchaserec(true); } }>
                구매 내역
              </Button>
              <Button className="sideBars" onClick={ ()=>{ history.push('/my-cart') } }>
                장바구니
              </Button>
            </ListGroup>
          </Col>
          <Col xs={10}>
          {
            userInfo === true
            ? <Modal1 userUniqueId={userUniqueId} changeuserUniqueId={changeuserUniqueId} name={name} changeName={changeName} changeuserInfo={changeuserInfo}></Modal1>
            : null
          }
          {
            orderInfo === true
            ? <Modal2 password={password} changePassword={changePassword} password2={password2} changePassword2={changePassword2} changeorderInfo={changeorderInfo}></Modal2>
            : null
          }
          {
            info === true
            ? <Modal3 userEmail={userEmail} changeuserEmail={changeuserEmail} changeInfo={changeInfo}></Modal3>
            : null
          }
          {
            addressInput === true
            ? <h4 className='qnaInput'>
                <p className='qnaCreate'>
                  배송 주소 변경
                </p>
                <div className='littleAlert'>
                  <p className='qnaAlert'>
                    개인 정보를 수정할 수 있습니다.
                  </p>
                  &nbsp;
                  <p className='addressList'>우편 번호: {address1}</p>
                  <p className='addressList'>주소: {address2}</p>
                  <p className='addressList'>상세 주소: {address3}</p>
                </div>
                <DaumPostcode className="postCodeStyle" onComplete={handleComplete} />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={(e)=>{ changeaddress3(`${e.target.value}`) }}>
                  <Form.Label>상세주소</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              <Button onClick={()=>{ 
                axios.post('/user', {
                  userEmail: props.userEmail
                })
                .then(function (response) {
                  console.log(props.userEmail);
                })
                .catch(function (error) {
                  console.log(props.userEmail);
                }); changeaddressInput(false);
              }}>저장</Button>
            </h4>
            : null
          }
          {
            purchaserec === true
            ? <Modal4 changePurchaserec={changePurchaserec}></Modal4>
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
        }); props.changeuserInfo(false);
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
        }); props.changeorderInfo(false);
      }}>저장</Button>
    </h4>
  )
}


function Modal3(props) {

  return (
    <h4 className='qnaInput'>
      <Form>
        <p className='qnaCreate'>
          이메일 변경
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
        }); props.changeInfo(false);
      }}>저장</Button>
    </h4>
  )
}

function Modal4(props) {

  return (
    <h4 className='qnaInput'>
      <Form>
        <p className='qnaCreate'>
          구매 내역
        </p>
        <div className='littleAlert'>
          <p className='qnaAlert'>
            구매 내역을 확인할 수 있습니다.
          </p>
        </div>
          <Container className='qnaList'>
            <Row className='qnacategory'>
              <Col xs={1}>id</Col>
              <Col>구매일</Col>
              <Col xs={6}>제품명</Col>
              <Col></Col>
            </Row>
          </Container>
      </Form>
      <Button onClick={()=>{ props.changePurchaserec(false); } }>저장</Button>
    </h4>
  )
}

  export default Account;