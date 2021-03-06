import React, { useState} from 'react';
import { Nav, Navbar,Form,Button, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';



const Header = ({handleLogOut}) => {
    const [isNavOpen, setisNavOpen] = useState(false);
    return(
    <React.Fragment>
      <Navbar dark expand="md" fixed="top" >
                    <div className="container" >
                        <NavbarToggler onClick={()=>{
                        setisNavOpen = !isNavOpen
                        }} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/10.jpg' height="40" width="50" alt='LOGO' /></NavbarBrand>
                        <Collapse isOpen={isNavOpen} navbar>
                            <Nav navbar >
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'> Restaurants</NavLink>
                            </NavItem>
                            </Nav>
                            <Form inline>
                               <input type="text" placeholder="Search" className="mr-sm-2" />
                               <Button variant="outline-success">Search</Button>
                            </Form>
                            <Button onClick={handleLogOut} style={{marginLeft:"23.5rem"}}> 
                                Log-Out 
                            </Button>
                        </Collapse>
                    </div>
                </Navbar>
    </React.Fragment>
    );
  }


export default Header;