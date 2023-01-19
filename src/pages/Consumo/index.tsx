import { useState } from "react";
import { Button, Container, Modal, Pagination } from "react-bootstrap";
import BarraUserIn from "../../components/BarraUserIn";
import FiltroConsumo from "./FiltroConsumo";
import MsgModal from "../../components/MsgModal";
import Tabla from "../../components/Tabla";
import RegistroConsumo from "./RegistroConsumo";
import EditarConsumo from "./EditarConsumo"; 

const dataUltimosMov: string[][] = [
    ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$10.000", "En Proceso"],
    ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$20.000", "En Proceso"],
    ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$30.000", "En Proceso"],
    ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$40.000", "En Proceso"],
    ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$50.000", "En Proceso"],
    ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$60.000", "En Proceso"],
    ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$70.000", "En Proceso"],
    ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$80.000", "En Proceso"],
    ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$90.000", "En Proceso"],
    ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$11.000", "En Proceso"],
    ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$22.000", "En Proceso"],
    ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$33.000", "En Proceso"]
];

const PageConsumo = () => {

    const [mostrar, setMostrar] = useState(false);
    const [editar, setEditar] = useState(false);
    const [MsgDialog, setMsgDialog] = useState(false);
    let [nroItem, setNroItem] = useState(0); 

    const Paginacion = (props: any) => {

        const stilo: object = {
            display: "flex", 
            flexDirection: "row", 
            justifyContent: 'center'
        }
        
        return(

            <div className='container'>
            <div style={stilo} >
            <Pagination className='text-dark'>
                <Pagination.First />
                <Pagination.Prev />
                {
                    props.active ? <Pagination.Item active>{1}</Pagination.Item>
                    : <Pagination.Item >{1}</Pagination.Item>
                }
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            </div>
        </div>

        );
    }

    function ModalRegistro(props: {show: boolean, handlerHide: any}) {

        return (
            <div>
                <Modal show={props.show} centered={true} size="xl" >
                    <Modal.Header >
                        <Modal.Title className='mx-auto'>
                                <h5 className='fw-bold' >Registrar Consumo</h5>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto '>
                        <RegistroConsumo />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-success  rounded-pill" onClick={() => props.handlerHide()}>
                            Aceptar
                        </Button>
                        <Button  className=" btn-secondary rounded-pill" onClick={() => props.handlerHide()}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    function ModalEditar(props: {show: boolean, handlerHide: any}) {

        return (
            <div>
                <Modal show={props.show} centered={true} size="lg" className="bg-dark" style={{opacity: "90%"}}>
                    <Modal.Header >
                        <Modal.Title className='mx-auto'>
                                <h5 className='fw-bold' >Editar Consumo</h5>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto modalBody'>
                        <EditarConsumo />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button  className="btn-success  rounded-pill" onClick={() => props.handlerHide()}>
                            Aceptar
                        </Button>
                        <Button className=" btn-secondary rounded-pill" onClick={() => props.handlerHide()}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }    

    const TablaConsumo = () => {
        return(
            <div>
                    <div className="d-flex flex-row-reverse mt-3">
                        <Button className="btn-success rounded-pill" onClick={()=>{setMostrar(true)}}> + Registrar</Button> 
                    </div>
                    <Tabla 
                        header="Consumo de Trozos"
                        columHeader={["N° Consumo", "Fecha", "Hora", "Centro","Máquina", "Turno", "Jefe Turno", "Operador"]}
                        data={dataUltimosMov}
                        handlerEdit={handlerE}
                        handlerInfo={handlerI}
                        handlerDelete={handlerD}
                    />
            </div>


        );
    }

    const stilo: object = {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: 'center',
        fontFamily: "Open Sans,sans-serif",       
    }

    const handleBtnClose = () =>{ 
        setMostrar(false);
    }

    const handleBtnCloseEditar = () =>{ 
        setEditar(false);
    }    

    const handlerE = (index: number) =>{ 
        setEditar(true);
    }    

    const handlerI = (index: number) =>{ 
        setMostrar(true);
    }

    const handlerD = (index: number) => {
        setNroItem(index);
        console.log("HandlerD: ", index, nroItem);
        setMsgDialog(true);
    }

    const handlerMsgModalCancel = () =>{ 
        setMsgDialog(false);
    }   

    const handlerMsgModalAccept = () =>{ 
        setMsgDialog(false);
        dataUltimosMov.splice(nroItem, 1);
    }       
    
    return(
        <div >
            <BarraUserIn username="Cristian A. Cortes Sarmiento" />
            <div className="ps-3 m-3"><h3 className="border-5 border-start border-success ps-3">Consumo Trozos</h3></div>
            <Container>
                <div className="bg-light rounded-2" >
                    <FiltroConsumo />
                    <TablaConsumo/>
                    <div style={stilo}>
                        <div className="container">
                            <a href="/" style={{color: "white"}} className="btn btn-success">Descargar XLS </a> 
                        </div>   
                        <div>
                            <Paginacion active={1} />
                        </div>                  
                    </div>
                </div>
            </Container>
            <ModalRegistro show={mostrar} handlerHide={() => handleBtnClose()}/>
            <ModalEditar show={editar} handlerHide={() => handleBtnCloseEditar()}/>            
            <MsgModal show={MsgDialog}
                    mensaje="¿Esta seguro que desea eliminar el registro de consumo seleccionado? Esta operación es irreversible."
                    handlerCancel={handlerMsgModalCancel}
                    handlerAccept={handlerMsgModalAccept}
            />           
        </div>
    );
}

export default PageConsumo;