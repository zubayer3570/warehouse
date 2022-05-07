import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import "./Header.css"

const Header = () => {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return ''
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto navigations'>
                            {
                                user ?
                                    <>

                                        <Nav.Link as={Link} to='/my-items'>My Items</Nav.Link>
                                        <Nav.Link as={Link} to='/add-item'>Add Item</Nav.Link>
                                        <Nav.Link as={Link} to='/manage-inventory'>Inventory</Nav.Link>
                                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>

                                        <Nav.Link as={Link} to='/login' onClick={() => signOut(auth)}>Logout</Nav.Link>

                                        <Nav.Link as={Link} to='/' >
                                            <img className='user-img' src={user?.photoURL} alt="" />
                                        </Nav.Link>


                                    </>
                                    :
                                    <>
                                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                        <Nav.Link as={Link} to='/register' >Register</Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;