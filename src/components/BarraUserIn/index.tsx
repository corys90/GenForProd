import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaCog, FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom"
const Person = require("../../assets/person-green.svg");
const Logout = require("../../assets/logout.svg");

const BarraUserIn = (props: {username: string}) => {

    return(
        <>
            <div className="container-fluid 
                 d-flex justify-content-end
                 align-items-center gap-2 mb-3 shadow"  
                 style={{backgroundColor: "white", height: "58px"}}>
                {/* <div><h3 className='text-success'><FaUserCircle/></h3></div>    
                    <div className='pr-3 border-end'>{props.username}</div>
                    <div>Cerrar Sesión</div>*/}
                <Navbar className="w-100 fw" bg="white" expand="lg" >
                    <Container>
                        <Nav className="ms-auto" >
                            <div><h3 className='text-success '><FaUserCircle/></h3></div>   
                            <Nav.Link href="#" >{props.username}</Nav.Link>
                            <div><h3 className='text-success'><FaCog/></h3></div>                           
                            <NavDropdown title="Opciones" id="basic-nav-dropdown"  align="end">
                                <NavDropdown.Item href="#action/3.1">Cambiar Clave</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Editar Perfil</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Salir
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>   
                    </Container>
                </Navbar>                
            </div>
        </>
    );

}

export default BarraUserIn;