import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Tab, Tabs, Form, Button } from 'react-bootstrap';
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
  

    return (
      <div className="container">
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
            <h4>
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
            </h4>
          </Tab>
          <Tab eventKey="contact" title="Review">
            <div>{/* 제목 */}</div>
            <h1>{/* 내용 */}</h1>
            <p>{/* 작성자, 날짜 */}</p>
          </Tab>
        </Tabs>

      </div>  
    )
  };


  export default Detail;