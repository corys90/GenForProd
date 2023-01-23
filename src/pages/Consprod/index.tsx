import { useState } from "react";
import { Button, Container, Modal, Pagination, TabContainer } from "react-bootstrap";
import BarraUserIn from "../../components/BarraUserIn";
import FiltroConsumoProduccion from "../Consprod/FiltroConsumoProduccion";
import MsgModal from "../../components/MsgModal";
import Tabla from "../../components/Tabla";
import EditarConsumoProduccion from "./EditarConsumoProduccion"; 
import RegistroConsumoProduccion from "./RegistroConsumoProduccion";
import { FaRegFileExcel } from "react-icons/fa";
import "../../index.css";

const dataUltimosMov: string[][] = [
    ["Prod001", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Turno 1", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod002", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Turno 2", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod003", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Turno 3", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod004", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Turno 4", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod005", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Turno 5", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod006", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Turno 6", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod007", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Turno 7", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod008", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Turno 8", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod009", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Turno 9", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod0011", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Turno 11", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod0022", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Turno 22", "Juna Pérez", "Cristian A. Cortes S."],
    ["Prod0033", "24-10-2023", "Batuco", "Fl_Bat_01", "Asserradero", "Turno 33", "Juna Pérez", "Cristian A. Cortes S."]
];

const PageConsprod = () => {

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

    function ModalRegistroConsProd(props: {show: boolean, handlerHide: any}) {

        return (
            <div>
                <Modal  onHide={props.handlerHide} show={props.show} centered={true} size="xl" >
                    <Modal.Header closeButton>
                        <Modal.Title>
                                <h3 >Registrar Consumo PR</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto '>
                        <RegistroConsumoProduccion />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button  className="btn btn-success bg-primario "  onClick={() => props.handlerHide()}>
                            Aceptar
                        </Button>
                        <Button  className=" btn-secondary "  onClick={() => props.handlerHide()}>
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
                <Modal  onHide={props.handlerHide} show={props.show} centered={true} size="lg" className="bg-dark" style={{opacity: "90%"}}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                                <h3 >Editar Consumo PR</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto '>
                        <EditarConsumoProduccion />
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

    const TablaConsumoProduccion  = () => {

        return(
            <div>
                <div className="d-flex m-3">
                    <Button className="btn btn-success bg-primario " onClick={()=>{setMostrar(true)}}>Nuevo Consumo producción</Button> 
                </div>
                <Tabla 
                    header="Registro de Consumo Producción"
                    columHeader={["N° Con Prod.", "Fecha", "Planta", "Centro", "Proceso", "Turno", "Jefe Turno", "Operador"]}
                    data={dataUltimosMov}                        
                    handlerEdit={handlerE}
                    handlerInfo={handlerI}
                    handlerDelete={handlerD}
                />
            </div>            
        )

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
                <div className="ps-0 m-3 font-bold "><h2 className="border-5 border-start border-success ps-2">Consumo Producción</h2></div>            
                <Container>
                    <div className="bg-light rounded-2" >
                        <FiltroConsumoProduccion />
                        <TablaConsumoProduccion />
                        <div  style={stilo}>
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
                <ModalRegistroConsProd show={mostrar} handlerHide={() => handleBtnClose()}/>
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

export default PageConsprod;