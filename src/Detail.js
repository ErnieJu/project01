import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props){
  let {id} = useParams();
  let history = useHistory();

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.productData[id].name}</h4>
            <p>{props.productData[id].description}</p>
            <p>{props.productData[id].cost}</p>
            <button className="btn btn-danger">주문하기</button> 
            <button onClick={ ()=>{ history.push('/') } }></button>
          </div>
        </div>
    </div>  
    )
  };


  export default Detail;