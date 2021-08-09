import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Tab, Tabs, Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';



function Detail(props){
  let {id} = useParams();
  let history = useHistory();
  let detailProduct = props.productData.find(function(product){
    return(product.id == id -1)
  });

  let num = detailProduct.id;
  let [title, changeTitle] = useState('');
  let [content, changeContent] = useState('');
  let [modal, changeModal] = useState(false);
  let qnaData = props.qnaData;
  


    return (
      <div className="container">
        { /* 디테일 위에 페이지 */}
        <div className="row">
          <div className="col-md-6">
            <img src={'/img/' + (num + 5) + '.jpg'} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{detailProduct.name}</h4>
            <p>{detailProduct.description}</p>
            <p>{detailProduct.cost}원</p>
            <p>재고: {detailProduct.stockQuantity}개</p>
            &nbsp;
            <button className="btn btn-danger">바로주문</button> 
            &nbsp;
            <button className="btn btn-danger">장바구니</button> 
            &nbsp;
            <button className="btn btn-danger" onClick={ ()=>{ history.push('/') } }>뒤로</button>
          </div>
        </div>

        &nbsp;
        <p className="temp">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, ante lacinia dignissim commodo, arcu erat porta lacus, 
        eget viverra erat est quis orci. Etiam tempor, erat non hendrerit ullamcorper, nunc ex lacinia lectus, et vestibulum eros justo ac tellus. 
        Integer vel gravida mauris, ut commodo est. Nunc pharetra sapien eu dolor feugiat venenatis. Integer eget dui quis ex auctor scelerisque. 
        </p>
        &nbsp;

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="profile" title="Detail">
            <h4 className="pt-5">
              <img src={'/img/' + (num + 5) + '.jpg'} width="100%" className="detailImg"></img>
              <h4>{detailProduct.description}</h4>
              <p className="productDescription">"This will be replaced by specific detail of the product selected."</p>
            </h4>
          </Tab>
          <Tab eventKey="home" title="Q&A">
            <Container className='qnaList'>
              <Row className='qnacategory'>
                <Col>글번호</Col>
                <Col xs={6}>글제목</Col>
                <Col>글쓴놈</Col>
                <Col>시간</Col>
                <Col xs={1}>조회수</Col>
              </Row>
            </Container>
            {
              qnaData.map((a,i)=>{ return <QNA qnaData={qnaData[i]} i={i} key={i}></QNA> })
            }
            <h1> </h1>
            &nbsp;
            <p> </p>
            <Button onClick={ ()=>{ changeModal(!modal) } } className='detailQnA'>질문 입력</Button>
            &nbsp;
            <h1>  </h1>
            &nbsp;
          </Tab>
          <Tab eventKey="contact" title="Review">
            <div>{/* 제목 */}</div>
            <h1>{/* 내용 */}</h1>
            <p>{/* 작성자, 날짜 */}</p>
          </Tab>
        </Tabs>

        
        
        {
          modal === true
          ? <Modal title={title} content={content} changeTitle={changeTitle} changeContent={changeContent} detailProduct={detailProduct}></Modal>
          : null
        }


      </div>  
    )
  };

  function Modal(props) {

    return (
      <h4 className='qnaInput'>
        <Form>
          <p className='qnaCreate'>
            {props.detailProduct.name}에 대한 문의 사항을 입력해 주세요.
          </p>
          <div className='littleAlert'>
            <p className='qnaAlert'>
              해당 제품의 판매자가 문의사항을 확인하는 즉시 답변을 제공할 것입니다.
            </p>
            <p className='qnaAlert'>
              답변 회신까지 평균 2~3일이 소요됩니다.
            </p>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=>{ props.changeTitle(`${e.target.value}`) }}>
            <Form.Label>제목</Form.Label>
            <Form.Control type="email" placeholder="제목을 입력하세요" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={(e)=>{ props.changeContent(`${e.target.value}`) }}>
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Button onClick={()=>{ 
          axios.post('/user', {
            title: props.title,
            content: props.content
          })
          .then(function (response) {
            console.log(props.title);
            console.log(props.content);
          })
          .catch(function (error) {
            console.log(props.title);
            console.log(props.content);
          });
        }}>전송</Button>
      </h4>
    )
  }

  function QNA(props) {

    return (
      <Container>
        <Link to={('/qna-specific/' + props.qnaData.id)} className='noUnderline'>
          <Row onClick={ ()=>{  } } className='qnabox'>
            <Col>{props.qnaData.id}</Col>
            <Col xs={6}>{props.qnaData.title}</Col>
            <Col>{props.qnaData.userId}</Col>
            <Col>{props.qnaData.content}</Col>
            <Col xs={1}>{props.qnaData.viewCount}</Col>
          </Row>
        </Link>
      </Container>
    )
  }


  export default Detail;