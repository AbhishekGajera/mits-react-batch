import { useState , useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom'

function Header({ isLoggedIn }) {

  const [auth, setauth] = useState(localStorage.getItem('auth') === 'Yes' ? true : false)

  useEffect(() => {
    if(isLoggedIn){
      setauth(true)
    }
  }, [isLoggedIn])
  


  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate('/login')
  }

  const onClickLogout = () => {
    localStorage.removeItem('auth')
    navigate('/login')
    setauth(false)
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Link to="/" className='mx-2'>Home</Link>
            <Link to="/expense" className='mx-2'>Expense</Link>
            <Link to="/wheather" className='mx-2'>Wheather</Link>
            <Link to="/book" className='mx-2'>Book</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Nav>
        {!auth && <button className="button" onClick={onClickHandler}>Login</button>}
        {auth && <button className="button" onClick={onClickLogout}>Logout</button>}
      </Nav>
    </Navbar>
  );
}

export default Header;