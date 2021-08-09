import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Col, Container, Row, Button, Tab, Tabs } from 'react-bootstrap';

function Detail(props){
  let {id} = useParams();
  let history = useHistory();
  let detailProduct = props.productData.find(function(product){
    return(product.id == id -1)
  });

  let num = detailProduct.id;

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
          <Tab eventKey="home" title="Detail">
            <h4 className="pt-5">
              {detailProduct.description}
            </h4>
          </Tab>
          <Tab eventKey="profile" title="What is this?">
            <h4>
              이건 뭘까?
            </h4>
          </Tab>
          <Tab eventKey="contact" title="Review">
            <h4>
              리뷰?
            </h4>
          </Tab>
        </Tabs>

      </div>  
    )
  };


  export default Detail;