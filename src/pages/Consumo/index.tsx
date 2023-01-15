import { useState } from "react";
import { Button, Modal, Pagination } from "react-bootstrap";
import BarraUserIn from "../../components/BarraUserIn";
import FiltroConsumo from "../../components/FiltroConsumo";
import MsgModal from "../../components/MsgModal";
import Tabla from "../../components/Tabla";
import RegistroConsumo from "./RegistroConsumo";
const imgLeonera = require('./imgLeonera2.png');

const dataUltimosMov: string[][] = [
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$10.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$20.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$30.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$40.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$50.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$60.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$70.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$80.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$90.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$11.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$22.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$33.000", "En Proceso"]
];

const PageConsumo = () => {

    const [mostrar, setMostrar] = useState(false);
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

    function MensajeModal(props: {show: boolean, handlerHide: any}) {

        return (
            <div>
                <Modal show={props.show} centered={true} size="xl" >
                    <Modal.Header >
                        <Modal.Title className='mx-auto'>
                                <h6>Registrar Consumo</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto modalBody'>
                        <RegistroConsumo />
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
            <div style={{width: "auto", backgroundColor: "#303742"}}>
                <div className="pt-4 mt-2" style={stilo}>
                    <img src={imgLeonera} alt="Leonera" width={"70%"} />
                </div>
                <div className="pt-4 mt-2"></div>
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Consumo Trozos</a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Producción</a>
                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Consumo producción</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Almacen control</a>
                </div>            
            </div>
            <div>
                <BarraUserIn username="Cristian A. Cortes Sarmiento" />
                <FiltroConsumo />
                <div>
                    <div className="container d-flex flex-row-reverse">
                        <Button className="btn-success " onClick={()=>{setMostrar(true)}}> + Registrar</Button> 
                    </div>
                    <Tabla 
                        header="Consumo de Trozos"
                        columHeader={["N° Consumo", "Fecha", "Hora", "Centro","Máquina", "Turno", "Jefe Turno", "Operador"]}
                        data={dataUltimosMov}
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
            <MensajeModal show={mostrar} handlerHide={() => handleBtnClose()}/>
            <MsgModal show={MsgDialog}
                mensaje="¿Esta seguro que desea eliminar el registro de consumo seleccionado? Esta operación es irreversible."
                handlerCancel={handlerMsgModalCancel}
                handlerAccept={handlerMsgModalAccept}
            />
           </div>
        </>
    );
}

export default PageConsumo;