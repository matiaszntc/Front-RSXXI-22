import React, { useEffect, useState } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap';


export const NavMenu = () => {
  const [token, setToken] = useState(null)
  const [nombre, setNombre] = useState("Usuario??")
 
  const logout = () => {
    localStorage.clear()
    window.location.reload()
    window.location.href = '/'
  }
  useEffect(() => {
    setToken(localStorage.getItem("token"))
    if(localStorage.getItem("nombre")){
      setNombre(localStorage.getItem("nombre"))
    }
  },[])

  return (
    <div>
      <Navbar color="danger" dark expand="md" fixed="" light container>
      <NavbarBrand href="/">Restaurant RSXXI</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/platos">Platos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contacto">Contacto</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/reserva">Reserva</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
              {
                token ? (
                  <div>
                    <UncontrolledDropdown inNavbar nav>
                      <DropdownToggle caret nav>{nombre}</DropdownToggle>
                      <DropdownMenu right>
                            <DropdownItem href='/reserva'>Reserva</DropdownItem>
                            <DropdownItem href='/platos'>Platos</DropdownItem>
                            <DropdownItem href='/crearReserva'>Crear Reserva</DropdownItem>
                            <DropdownItem divider /> 
                            <DropdownItem onClick={logout}>logout</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                ):(
                  <>
                  <NavItem>
                  <NavLink href="/login">Login</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="/register">Registro</NavLink>
                  </NavItem>
                  </>
                )

              }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
