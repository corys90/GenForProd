import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaBarcode } from "react-icons/fa";
import MsgModal from "../../../components/MsgModal";
import MensajeModalCB from "../../../components/MsgModalCB";
import DetalleConsumoProducion from "../DetalleConsumoProducion";
import Tabla from "./Tabla";

const Select = () =>{
    return(
        <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    );
}

const detalles: string[][] = [
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$10.000", "En Proceso", "$10.000", "x", "_", "_", "_", "x"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$20.000", "En Proceso", "$20.000", "x", "_", "_", "_", "_"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$30.000", "En Proceso", "$30.000", "x", "_", "_", "_", "x"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$40.000", "En Proceso", "$40.000", "x", "_", "_", "_", "x"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$50.000", "En Proceso", "$50.000", "x", "_", "_", "_", "x"]

];

const RegistroConsumoProduccion = () => {

    const [msgConfirmRegistro, setMsgConfirmRegistro] = useState(false);
    const [itemD, setItemD] = useState(0);
    const [MsgDialogImp, setMsgDialogImp] = useState(false); 
    const [MsgDialogImpCB, setMsgDialogImpCB] = useState(false); 
    const [editDetalleConsumoPR, setEditDetalleConsumoPR] = useState(false);

    function ModalEditarDetallePR(props: {show: boolean, handlerHide: any}) {

        return (
            <div>
                <Modal show={props.show} centered={true} size="lg" className="bg-secondary" style={{opacity: "95%"}}>
                    <Modal.Header >
                        <Modal.Title >
                                <h3 >Detalle consumo PR</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto '>
                        <DetalleConsumoProducion/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-success " onClick={() => props.handlerHide()}>
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

    const handlerDeleteRegistroConsumo = (idx: number) =>{
        setItemD(idx);
        setMsgConfirmRegistro(true);
    }

    const handlerEditarDetalleConsumoPR = (idx: number) =>{
        setItemD(idx);
        setEditDetalleConsumoPR(true);
    }    

    const handlerMsgModalCancel = () =>{
        
        setMsgConfirmRegistro(false);
    } 
    
    const handlerMsgModalAccept = () =>{
        
        detalles.splice(itemD, 1);
        setMsgConfirmRegistro(false);
    }    

    const handleBtnCloseEditarMaterial = () =>{ 
        setEditDetalleConsumoPR(false);
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

    const handlerCapturar = () =>{ 
        setMsgDialogImpCB(true);
    }     
    
     const handlerMsgModalImpConfirmar = () =>{ 
        setMsgDialogImpCB(false);
    }      
   

    return(
        <>
           <div className="">   
                <div id="filtro" className="container-fluid " style={{backgroundColor: "white"}}>
                    <form className='row p-3'>
                        <div className="col-4">
                            <label htmlFor="oc" className="form-label">N° OC</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="ncon" className="form-label">N° Consumo</label>
                            <input type="text" className="form-control" id="ncon" placeholder="N° Consumo" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="fecha" className="form-label">Fecha</label>
                            <input type="date" className="form-control" id="fecha" placeholder="" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="hora" className="form-label">Hora</label>
                            <input type="date" className="form-control" id="hora" placeholder="" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="planta" className="form-label">Planta</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="centro" className="form-label">Centro</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="proc" className="form-label">Proceso</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="operador" className="form-label">Turno</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="turno" className="form-label">Jefe Turno</label>
                            <Select/>
                        </div>                 
                    </form>
                    <hr />
                    <form className=' row p-3 fw-bold'>
                        <label className='fw-bold' ><h5>Detalle Lote</h5></label>   
                        <div className="col-2 " style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <label htmlFor="cb" className="form-label">Código </label>
                            <div style={{width: "20px"}}></div>
                            <h1 id="cb"><FaBarcode/></h1>                                                     
                        </div> 
                        <div className="col-2 ">
                            <Button className="btn-success " style={{width: "100%"}} onClick={()=> handlerCapturar()}>Capturar</Button>
                        </div>   
                        <div className="mt-3"></div>
                        <Tabla
                            header=""
                            columHeader={["N° Lote", "Material", "OC", "ESP","ANC", "LAR", "CANT", "UM", "VOL", "B", "E", "S", "D", "C"]}
                            data={detalles}
                            handlerPrint={handlerCapturar}
                            handlerEdit={handlerEditarDetalleConsumoPR}
                            handlerDelete={handlerDeleteRegistroConsumo}
                        />
                        <div className="container-fluid text-start">
                            <a href="#!" style={{color: "white"}} className="btn btn-success" onClick={()=>handlerImp()}>Descargar XLS </a> 
                        </div> 
                    </form>
                </div>
                <ModalEditarDetallePR show={editDetalleConsumoPR} handlerHide={() => handleBtnCloseEditarMaterial()}/>
                <MsgModal show={msgConfirmRegistro}
                    mensaje="¿Está seguro de eliminar esta fila?"
                    handlerCancel={handlerMsgModalCancel}
                    handlerAccept={handlerMsgModalAccept}
                />
                <MsgModal show={MsgDialogImp}
                    mensaje="¿Está seguro que desea descargar Registro de Consumo?"
                    handlerCancel={handlerMsgModalImpCancel}
                    handlerAccept={handlerMsgModalImpAccept}
                />      
                <MensajeModalCB show={MsgDialogImpCB}
                    mensaje="Capturar Lote"
                    handlerAccept={handlerMsgModalImpConfirmar}
                />                              
           </div>
        </>
    );
}

export default RegistroConsumoProduccion;