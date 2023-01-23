import { useState } from "react";
import { Button, Container, Modal, Pagination } from "react-bootstrap";
import BarraUserIn from "../../components/BarraUserIn";
import FiltroProduccion from "../Produccion/FiltroProduccion";
import MsgModal from "../../components/MsgModal";
import Tabla from "../../components/Tabla";
import RegistroProduccion from "./RegistroProduccion";
import EditarProduccion from "./EditarProduccion"; 
import { FaRegFileExcel } from "react-icons/fa";
import "../../index.css";

const dataUltimosMov: string[][] = [
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Máquina_1", "Línea 1", "Turno 1", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Máquina_1", "Línea 1", "Turno 2", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Máquina_1", "Línea 1", "Turno 3", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Máquina_1", "Línea 1", "Turno 4", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Máquina_1", "Línea 1", "Turno 5", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Máquina_1", "Línea 1", "Turno 6", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Máquina_1", "Línea 1", "Turno 7", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Máquina_1", "Línea 1", "Turno 8", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Máquina_1", "Línea 1", "Turno 9", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Máquina_1", "Línea 1", "Turno 11", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Máquina_1", "Línea 1", "Turno 22", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Máquina_1", "Línea 1", "Turno 33", "Juna Pérez", "Cristian A. Cortes S."]
];

const PageProduccion = () => {

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

    function ModalRegistroProd(props: {show: boolean, handlerHide: any}) {

        return (
            <div>
                <Modal show={props.show} centered={true} size="xl" onHide={props.handlerHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                                <h3>Registrar Producción</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto '>
                        <RegistroProduccion />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-success bg-primario " onClick={() => props.handlerHide()}>
                            Aceptar
                        </Button>
                        <Button  className=" btn-secondary " onClick={() => props.handlerHide()}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    function ModalEditar(props: {show: boolean, handlerHide: any}) {

        return (
            <div>
                <Modal  onHide={props.handlerHide} show={props.show} centered={true} size="lg" className="bg-dark" style={{opacity: "90%"}}>
                    <Modal.Header  closeButton >
                        <Modal.Title>
                                <h3>Editar Producción</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto  modalBody '>
                        <EditarProduccion />
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
    
    const TablaProduccion = () => {

        return(
            <div>
                    <div className="d-flex m-3">
                        <Button className="btn btn-success bg-primario " onClick={()=>{setMostrar(true)}}>Nueva Producción</Button> 
                    </div>
                    <Tabla 
                        header="Registro de Producción"
                        columHeader={["N° Prod.", "Fecha", "Planta", "Centro", "Proceso", "Máquina", "Línea", "Turno", "Jefe Turno", "Operador"]}
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
        justifyContent: 'center'
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
        <div>
            <BarraUserIn username="Cristian A. Cortes Sarmiento" />
            <div className="ps-0 m-3 font-bold "><h2 className="border-5 border-start border-success ps-2">Producción</h2></div>
            <Container>
                <div className="bg-light rounded-2" >
                    <FiltroProduccion />
                    <TablaProduccion />
                    <div style={stilo}>
                        <div className="container">
                            <a href="#!" style={{color: "white"}} className="btn btn-success bg-primario" onClick={()=>handlerImp()}>
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
            <ModalRegistroProd show={mostrar} handlerHide={() => handleBtnClose()}/>
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

export default PageProduccion;