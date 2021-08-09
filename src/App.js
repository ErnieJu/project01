import { Navbar, NavDropdown, FormControl, Nav, Button, Form, Card, Carousel, Accordion } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './App.css';
import Detail from './Detail.js';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Account from './Account.js';
import axios from 'axios';
import Data from './Data.js';
import Cart from './Cart.js';
import QnaDetail from './QnaDetail.js';
import Qnadata from './Qnadata.js';


function App() {

  let history = useHistory();
  let [username,changeusername] = useState('');
  let [password,changepassword] = useState('');
  let [name,changename] = useState('');
  let [email,changeemail] = useState('');
  let [searchInput, changesearchInput] = useState('');
  let [productData, changeProductData] = useState(Data);
  let [qnaData, changeqnaData] = useState(Qnadata);

  useEffect(()=>{axios.get('http://localhost:8081/api/product/join').then((result)=>{ changeProductData([...productData, ...result.data]) }).catch()},[]);

  return (
    <div className="App">

      { /* 네비게이션 바 */}

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">임시 제목 쇼핑몰</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail/1">detail_temp</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/my-cart">Cart_temp</NavDropdown.Item>
              <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/my-account">My Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          &nbsp;
          &nbsp;
         
          <Form className="d-flex" onChange={(e)=>{changesearchInput(`${e.target.value}`)}} searchInput={searchInput}>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav>
            <Nav.Link href="/log-in">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* 대문 */}

    <Route exact path='/'>
      <div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/4.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
      

      {/* 상품 목록*/}

      <div className="container">
        <div className="row">

          { /*
          productData.map( (a,i)=>{ return <Maincard productData={a[i]} i={i} /> })
          */ }
              

          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='img/5.jpg' />
              <Card.Body>
                <Card.Title>{productData[0].name}</Card.Title>
                <Card.Text>
                  {productData[0].cost} 원
                </Card.Text>
                <Link to='/detail/01'>
                  <Button variant="primary">Specific</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='img/6.jpg' />
              <Card.Body>
                <Card.Title>{productData[1].name}</Card.Title>
                <Card.Text>
                  {productData[1].cost}
                </Card.Text>
                <Link to='/detail/02'>
                  <Button variant="primary">Specific</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='img/7.jpg' />
              <Card.Body>
                <Card.Title>{productData[2].name}</Card.Title>
                <Card.Text>
                  {productData[2].cost}
                </Card.Text>
                <Link to='/detail/03'>
                  <Button variant="primary">Specific</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='img/8.jpg' />
              <Card.Body>
                <Card.Title>{productData[3].name}</Card.Title>
                <Card.Text>
                  {productData[3].cost}
                </Card.Text>
                <Link to='/detail/04'>
                  <Button variant="primary">Specific</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          

          &nbsp;&nbsp;
        </div>
        <button onClick={ ()=>{ axios.get('http://localhost:8081/api/product/join').then((result)=>{ changeProductData([...productData, ...result.data]) }).catch(()=>{  }) } }>Show more</button>
      </div>
    </Route>

      {/* 로그인 페이지 */}

    <Route exact path='/log-in'>
      <div className="logIn">

      <h1>Login</h1>
      <p>Enter your ID and Password to login.</p>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicID" >
            <Form.Label>ID</Form.Label>
            <Form.Control type="id" placeholder="ID" onChange={ (e)=>{ changeusername(`${e.target.value}`) } } username={username}/>
          </Form.Group>
          
          { /*
          <Form.Group className="mb-3" controlId="formBasicID" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="id" placeholder="Enter email" onChange={ (e)=>{ changeusername(e.target.value) } } username={username}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          */ }

          <Form.Group className="mb-3" controlId="formBasicPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={ (e)=>{ changepassword(`${e.target.value}`) } } password={password}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={()=>{ history.push('/') 
            
              axios.post('/user', {
              username: username,
              password: password
            })
            .then(function (response) {
              console.log(username);
              console.log(password);
            })
            .catch(function (error) {
              console.log(username);
              console.log(password);
            });
          
            }}>
            Submit
          </Button>
          &nbsp; &nbsp;
          <Button variant="primary" type="submit" onClick={()=>{ history.push('/create-account') }}>
            Sign-in
          </Button>
        </Form>
      </div>
    </Route>

    { /* 상품 상세설명 페이지 */}

    <Route path={'/detail/:id'}>
      <Detail productData={productData} qnaData={qnaData}></Detail>
    </Route>

    {/* QNA 상세설명 페이지 */}
    <Route path={'/qna-specific/:id'}>
      <QnaDetail productData={productData} qnaData={qnaData}></QnaDetail>
    </Route>

    { /* 마이 어카운트 페이지 */}

    <Route exact path='/my-account'>
      <Account></Account>
    </Route>

    { /* 회원가입 페이지 */ }

    <Route exact path='/create-account'>
      <div className="createAccount">
        <h1>Create New Account</h1>
        <p>Fill out the form to create new account</p>

        <Form>

          <Form.Group className="mb-3" controlId="formBasicID" >
            <Form.Label>ID</Form.Label>
            <Form.Control type="id" placeholder="ID" onChange={ (e)=>{ changeusername(`${e.target.value}`) } } username={username}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={ (e)=>{ changepassword(`${e.target.value}`) } } password={password}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={ (e)=>{ changeemail(`${e.target.value}`) } } email={email}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter your Name" onChange={ (e)=>{ changename(`${e.target.value}`) } } name={name}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={()=>{ history.push('/') 
            {/*
              axios.post('/user', {
              username: username,
              password: password,
              email : email,
              name : name
            })
            .then(function (response) {
              console.log(username);
              console.log(password);
              console.log(email);
              console.log(name);
            })
            .catch(function (error) {
              console.log(username);
              console.log(password);
              console.log(email);
              console.log(name);
            });
          */}
        }}>
            Submit
          </Button>
          &nbsp; &nbsp;
          <Button variant="primary" type="submit" onClick={()=>{ history.push('/') }}>
            Cancle
          </Button>
        </Form>
      </div>
    </Route>

    { /* 카트 */}

    <Route exact path='/my-cart'>
      <Cart productData={productData}></Cart>
    </Route>



    

    </div>

    
  );
}

{ /* 메인 화면 상품 카드 */ }

/*
function Maincard(props) {
  return (
    <div className="col-md-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"holder.js/100px180" + (props.i + 1) + ".jpg"} />
        <Card.Body>
          <Card.Title>{ props.productData.name }</Card.Title>
          <Card.Text>
            { props.productData.cost}
          </Card.Text>
          <Link to={'/detail/' + (props.i + 1)}>
            <Button variant="primary">Specific</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}
*/


export default App;
