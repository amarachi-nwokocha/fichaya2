
 import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >DASHBOARD</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >CUSTOMERS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >ASSOSIATES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >REQUESTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >SCHEDULE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >PAYMENT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >SETTINGS</NavLink>
            </NavItem>
            <NavItem>
            <NavLink ><Button color="primary" className='sq1' size="sm"></Button></NavLink>
             </NavItem>
             <NavItem>
             <NavLink ><Button color="primary"className='sq2' size="sm"></Button></NavLink>
            </NavItem>
            </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;