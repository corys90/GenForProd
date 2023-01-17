import { useState } from "react";
import { Button, Modal, Pagination } from "react-bootstrap";
import BarraUserIn from "../../components/BarraUserIn";
import FiltroProduccion from "../Produccion/FiltroProduccion";
import MsgModal from "../../components/MsgModal";
import Tabla from "../../components/Tabla";
import RegistroProduccion from "./RegistroProduccion";
import EditarProduccion from "./EditarProduccion"; 

const imgLeonera = require('./imgLeonera2.png');

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
                <Modal show={props.show} centered={true} size="xl" >
                    <Modal.Header >
                        <Modal.Title className='mx-auto'>
                                <h6>Registrar Producción</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto '>
                        <RegistroProduccion />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-primary" onClick={() => props.handlerHide()}>
                            Cancelar
                        </Button>
                        <Button  className="btn-success" onClick={() => props.handlerHide()}>
                            Guardar
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
                                <h6>Editar Producción</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto '>
                        <EditarProduccion />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-primary" onClick={() => props.handlerHide()}>
                            Cancelar
                        </Button>
                        <Button  className="btn-success" onClick={() => props.handlerHide()}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>
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
    
    return(
        <>
           <div style={stilo}>
            <div>
                <BarraUserIn username="Cristian A. Cortes Sarmiento" />
                <FiltroProduccion />
                <div>
                    <div className="container d-flex flex-row-reverse">
                        <Button className="btn-success " onClick={()=>{setMostrar(true)}}> + Registrar</Button> 
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
                <div style={stilo}>
                    <div className="container-fluid">
                        <a href="/" style={{color: "white"}} className="btn btn-success">Descargar XLS </a> 
                    </div>   
                    <div>
                        <Paginacion active={1} />
                    </div>                  
                </div>
            </div>
            <ModalRegistroProd show={mostrar} handlerHide={() => handleBtnClose()}/>
            <ModalEditar show={editar} handlerHide={() => handleBtnCloseEditar()}/>                           
            <MsgModal show={MsgDialog}
                mensaje="¿Esta seguro que desea eliminar el registro de consumo seleccionado? Esta operación es irreversible."
                handlerCancel={handlerMsgModalCancel}
                handlerAccept={handlerMsgModalAccept}
            />

           </div>
        </>
    );
}

export default PageProduccion;