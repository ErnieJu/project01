import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Tab, Tabs, Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import RvsData from './RvsData';


function Detail(props){
  let {id} = useParams();
  let history = useHistory();
  let detailProduct = props.productData.find(function(product){
    return(product.id == id -1)
  });
  

  let num = detailProduct.id;
  let qnaData = props.qnaData;
  let [title, changeTitle] = useState('');
  let [content, changeContent] = useState('');
  let [modal, changeModal] = useState(false);
  let [rvsData, changervsData] = useState(RvsData);
  let detailRvs = rvsData.find(function(result){
    return(result.id == id -1)
  });


  const [qnas, setQnas] = useState(qnaData.slice(0,50));
  const [pageNumber, setPageNumber] = useState(0);

  const qnasPerPage = 10;
  const qnaVisit = pageNumber * qnasPerPage;

  const showQna = qnas
  .slice(qnaVisit, qnaVisit + qnasPerPage)
  .map((qnas) => {
    return (
      <Container qnaData={qnaData} detailProduct={detailProduct}>
        <Link to={('/qna-specific/' + qnas.id)} className='noUnderline' qnaNum={qnas}>
          <Row onClick={ ()=>{  } } className='qnabox'>
            <Col>{qnas.id}</Col>
            <Col xs={6}>{qnas.title}</Col>
            <Col>{qnas.userUniqueId}</Col>
            <Col>{qnas.content}</Col>
            <Col xs={1}>{qnas.viewCount}</Col>
          </Row>
        </Link>
      </Container>
      );
    });

    const pageCount = Math.ceil(qnas.length / qnasPerPage);
    const changePage = ({selected}) => {
      setPageNumber(selected)
    };
    
  const [rvs, setRvs] = useState(rvsData.slice(0,50));
  const [rvspageNumber, setrvsPageNumber] = useState(0);

  const rvsPerPage = 10;
  const rvsVisit = rvspageNumber * rvsPerPage;

  const showRvs = rvs
  .slice(rvsVisit, rvsVisit + rvsPerPage)
  .map((rvs) => {
    return (
      <Container rvsData={rvsData} detailRvs={detailRvs}>
        <Link to={('/rvs-specific/' + rvs.id)} className='noUnderline' rvsNum={rvs}>
          <Row onClick={ ()=>{  } } className='qnabox'>
            <Col>{rvs.id}</Col>
            <Col xs={6}>{rvs.title}</Col>
            <Col>{rvs.userUniqueId}</Col>
            <Col>{rvs.content}</Col>
            <Col xs={1}>{rvs.viewCount}</Col>
            <Col xs={1}>{rvs.rating}/5</Col>
          </Row>
        </Link>
      </Container>
      );
    });

    const pageCounts = Math.ceil(rvs.length / rvsPerPage);
    const changePages = ({selected}) => {
      setrvsPageNumber(selected)
    };

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
              {showQna}
            <h1></h1>
            &nbsp;
            <p> </p>
            <Button onClick={ ()=>{ changeModal(!modal) } } className='detailQnA'>질문 입력</Button>
            &nbsp;
            &nbsp;
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButtons"}
              previousLinkClassName={"PreviousButton"}
              nextLinkClassName={"nextButton"}
              activeClassName={"activeButton"}
            />
          </Tab>
          <Tab eventKey="contact" title="Review">
            <Container className='qnaList'>
              <Row className='qnacategory'>
                <Col>글번호</Col>
                <Col xs={6}>글제목</Col>
                <Col>글쓴놈</Col>
                <Col>시간</Col>
                <Col xs={1}>조회수</Col>
                <Col xs={1}>평점</Col>
              </Row>
            </Container>
            {showRvs}
            <h1></h1>
            &nbsp;
            <p></p>
            &nbsp;
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCounts}
              onPageChange={changePages}
              containerClassName={"paginationButtons"}
              previousLinkClassName={"PreviousButton"}
              nextLinkClassName={"nextButton"}
              activeClassName={"activeButton"}
            />
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

  export default Detail;