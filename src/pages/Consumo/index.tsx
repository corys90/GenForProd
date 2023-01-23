import { useState } from "react";
import { Button, Container, Modal, Pagination } from "react-bootstrap";
import BarraUserIn from "../../components/BarraUserIn";
import FiltroConsumo from "./FiltroConsumo";
import MsgModal from "../../components/MsgModal";
import RegistroConsumo from "./RegistroConsumo";
import EditarConsumo from "./EditarConsumo"; 
import Tabla from '../../components/Tabla';
import { FaRegFileExcel } from "react-icons/fa";
import "../../index.css";

const dataUltimosMov: string[][] = [
    ["Forestal Leonera", "24-10-2023", "08:00", "En Proceso","Dental", "Turno_1", "Raul Lara", "Cristian A."],
    ["Forestal Leonera", "24-10-2023", "09:00", "En Proceso","Dental", "Turno_1", "Raul Lara", "Cristian A."],
    ["Forestal Leonera", "24-10-2023", "10:00", "En Proceso","Dental", "Turno_1", "Raul Lara", "Cristian A."],
    ["Forestal Leonera", "24-10-2023", "01:00", "En Proceso","Dental", "Turno_1", "Raul Lara", "Cristian A."],
    ["Forestal Leonera", "24-10-2023", "02:00", "En Proceso","Dental", "Turno_1", "Raul Lara", "Cristian A."],
    ["Forestal Leonera", "24-10-2023", "03:00", "En Proceso","Dental", "Turno_1", "Raul Lara", "Cristian A."],
    ["Forestal Leonera", "24-10-2023", "04:00", "En Proceso","Dental", "Turno_1", "Raul Lara", "Cristian A."],
    ["Forestal Leonera", "24-10-2023", "05:00", "En Proceso","Dental", "Turno_1", "Raul Lara", "Cristian A."],
    ["Forestal Leonera", "24-10-2023", "06:00", "En Proceso","Dental", "Turno_1", "Raul Lara", "Cristian A."],
    ["Forestal Leonera", "24-10-2023", "07:00", "En Proceso","Dental", "Turno_1", "Raul Lara", "Cristian A."],
    ["Forestal Leonera", "24-10-2023", "08:00", "En Proceso","Dental", "Turno_1", "Raul Lara", "Cristian A."],
    ["Forestal Leonera", "24-10-2023", "09:00", "En Proceso","Dental", "Turno_1", "Raul Lara", "Cristian A."]
];

const PageConsumo = () => {

    const [mostrar, setMostrar] = useState(false);
    const [editar, setEditar] = useState(false);
    const [MsgDialog, setMsgDialog] = useState(false);
    const [MsgDialogImp, setMsgDialogImp] = useState(false);    
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
                        <Modal.Title>
                                <h3>Registrar Consumo</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto '>
                        <RegistroConsumo />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-success bg-primario " onClick={() => props.handlerHide()}>
                            Aceptar
                        </Button>
                        <Button  className=" btn-secondary " onClick={() => props.handlerHide()}>
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
                        <Modal.Title >
                                <h3 >Editar Consumo</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto modalBody'>
                        <EditarConsumo />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button  className="btn btn-success bg-primario " onClick={() => props.handlerHide()}>
                            Aceptar
                        </Button>
                        <Button className=" btn-secondary " onClick={() => props.handlerHide()}>
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
                    <div className="d-flex m-3">
                        <Button className="btn btn-success bg-primario " onClick={()=>{setMostrar(true)}}>Nuevo Consumo</Button> 
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
        setMsgDialog(true);
    }

    const handlerMsgModalCancel = () =>{ 
        setMsgDialog(false);
    }   

    const handlerMsgModalAccept = () =>{ 
        setMsgDialog(false);
        dataUltimosMov.splice(nroItem, 1);
    }  

    const handlerMsgModalImpCancel = () =>{ 
        setMsgDialogImp(false);
    }  
    
    const handlerMsgModalImpAccept = () =>{ 
        setMsgDialogImp(false);
    }      

    const handlerImp = () =>{ 
        setMsgDialogImp(true);
    }      
    
    return(
        <div >
            <BarraUserIn username="Cristian A. Cortes Sarmiento" />
            <div className="ps-0 m-3 font-bold "><h2 className="border-5 border-start border-success ps-2">Consumo Trozos</h2></div>
            <Container>
                <div className="bg-light rounded-2" >
                    <FiltroConsumo />
                    <TablaConsumo/>
                    <div style={stilo}>
                        <div className="container">
                            <a href="#!" style={{color: "white"}} className="btn btn-success bg-primario " onClick={()=>handlerImp()}>
                                <FaRegFileExcel className="m-1"/>
                                Descargar XLS
                            </a> 
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
                    mensaje="¿Está seguro de eliminar esta fila?"
                    handlerCancel={handlerMsgModalCancel}
                handlerAccept={handlerMsgModalAccept}
            />    
             <MsgModal show={MsgDialogImp}
                mensaje="¿Está seguro que desea descargar Registro de Consumo?"
                handlerCancel={handlerMsgModalImpCancel}
                handlerAccept={handlerMsgModalImpAccept}
            />         
        </div>
    );
}

export default PageConsumo;