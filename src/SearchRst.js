import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import SearchData from './SearchData';


function SearchRst(props){

  let [searchResult, changesearchResult] = useState(SearchData);
  let {id} = useParams();
  let history = useHistory();

  const axios = require("axios");
  useEffect(()=>{axios.get('http://localhost:8080/api/product/findAll')
                  .then(({ data })=>{ 
                    changesearchResult(data) 
                  })
                  .catch()},[]);

  let detailSearch = searchResult.find(function(result){
    return(result.id == id -1)
  });


  const [results, setResults] = useState(searchResult.slice(0,50));
  const [pageNumber, setPageNumber] = useState(0);

  const resultsPerPage = 10;
  const resultsVisit = pageNumber * resultsPerPage;

  const showQna = results
  .slice(resultsVisit, resultsVisit + resultsPerPage)
  .map((results) => {
    return (
      <Container results={results} detailSearch={detailSearch}>
        <Link to={('/qna-specific/' + results.id)} className='noUnderline' qnaNum={results}>
          <Row onClick={ ()=>{  } } className='qnabox'>
            <Col>{results.id}</Col>
            <Col xs={6}>{results.title}</Col>
            <Col>{results.userUniqueId}</Col>
            <Col>{results.content}</Col>
            <Col xs={1}>{results.viewCount}</Col>
          </Row>
        </Link>
      </Container>
      );
    });

    const pageCount = Math.ceil(results.length / resultsPerPage);
    const changePage = ({selected}) => {
      setPageNumber(selected)
    };





  return(

  <div>
    <p>
    "{props.searchInput}"에 대한 검색 결과
    </p>

    <Container className='qnaList'>
      <Row className='qnacategory'>
        <Col>글번호</Col>
        <Col xs={6}>글제목</Col>
        <Col>글쓴놈</Col>
        <Col>시간</Col>
        <Col xs={1}>조회수</Col>
      </Row>
    </Container>
    &nbsp;
    {showQna}
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

  </div>
  )
}






export default SearchRst