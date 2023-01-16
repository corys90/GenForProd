import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import MsgModal from "../../../components/MsgModal";
import EditarMaterial from "../EditarMaterial";
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
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$10.000", "En Proceso", "$10.000"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$20.000", "En Proceso", "$20.000"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$30.000", "En Proceso", "$30.000"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$40.000", "En Proceso", "$40.000"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$50.000", "En Proceso", "$50.000"]

];

const RegistProduccion = () => {

    const [msgConfirmRegistro, setMsgConfirmRegistro] = useState(false);
    const [itemD, setItemD] = useState(0);
    const [editMaterial, setEditMaterial] = useState(false);

    function ModalEditarMaterial(props: {show: boolean, handlerHide: any}) {

        return (
            <div>
                <Modal show={props.show} centered={true} size="lg" className="bg-secondary" style={{opacity: "95%"}}>
                    <Modal.Header >
                        <Modal.Title className='mx-auto'>
                                <h6>Editar Material</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto '>
                        <EditarMaterial/>
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

    const handlerDeleteRegistroConsumo = (idx: number) =>{
        setItemD(idx);
        setMsgConfirmRegistro(true);
    }

    const handlerEditarRegistroConsumo = (idx: number) =>{
        setItemD(idx);
        setEditMaterial(true);
    }    

    const handlerMsgModalCancel = () =>{
        
        setMsgConfirmRegistro(false);
    } 
    
    const handlerMsgModalAccept = () =>{
        
        detalles.splice(itemD, 1);
        setMsgConfirmRegistro(false);
    }    

    const handleBtnCloseEditarMaterial = () =>{ 
        setEditMaterial(false);
    }    

    return(
        <>
           <div className="">   
                <div id="filtro" className="container-fluid " style={{backgroundColor: "white"}}>
                    <form className='border row p-3'>
                        <div className="col-3">
                            <label htmlFor="nprod" className="form-label">N° Producción: </label>
                            <input type="text" className="form-control" id="nprod" placeholder="producción no." />
                        </div>
                        <div className="col-3">
                            <label htmlFor="fechaProd" className="form-label">Fecha: </label>
                            <input type="date" className="form-control" id="fechaProd" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="hora" className="form-label">Hora: </label>
                            <Select/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="proceso" className="form-label">Proceso: </label>
                            <Select/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="linea" className="form-label">Línea: </label>
                            <Select/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="maquina" className="form-label">Máquina: </label>
                            <Select/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="truno" className="form-label">Turno: </label>
                            <Select/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="jefeturno" className="form-label">Jefe turno: </label>
                            <Select/>
                        </div>                  
                    </form>
                    <form className='border row p-3 '>
                        <label htmlFor=""><h6>Detalle producción</h6></label>
                        <div className="col-2">
                            <label htmlFor="orden" className="form-label">Orden de Compra: </label>
                            <Select/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="reponsable" className="form-label">Responsable: </label>
                            <Select/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="cliente" className="form-label">Cliente: </label>
                            <Select/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="familia" className="form-label">Familia: </label>
                            <Select/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="subamilia" className="form-label">Sun Familia: </label>
                            <Select/>
                        </div>  
                        <div className="col-2">
                            <label htmlFor="material" className="form-label">Material: </label>
                            <Select/>
                        </div> 
                        <div className="col-2">
                            <label htmlFor="espesor" className="form-label">Espesor: </label>
                            <Select/>
                        </div>   
                        <div className="col-2">
                            <label htmlFor="ancho" className="form-label">Ancho: </label>
                            <Select/>
                        </div>       
                        <div className="col-2">
                            <label htmlFor="largo" className="form-label">Largo: </label>
                            <Select/>
                        </div>     
                        <div className="col-2">
                            <label htmlFor="cantidad" className="form-label">Cantidad: </label>
                            <Select/>
                        </div>                              
                        <div className="col-2 ">
                            <Button className="btn-g btn-success mt-3" style={{width: "100%"}}>Agregar</Button>
                        </div>
                        <div className="mt-3"></div>
                        <Tabla className="mt-2" header=""
                            columHeader={["Paquete", "Cliente", "Material", "ESP","ANC", "LAR", "CANT", "UM", "VOL"]}
                            data={detalles}
                            handlerPrint={handlerDeleteRegistroConsumo}
                            handlerEdit={handlerEditarRegistroConsumo}
                            handlerDelete={handlerDeleteRegistroConsumo}
                        />
                        <div className="container-fluid text-start">
                            <a href="#!" style={{color: "white"}} className="btn btn-success">Descargar XLS </a> 
                        </div> 
                    </form>
                </div>
                <ModalEditarMaterial show={editMaterial} handlerHide={() => handleBtnCloseEditarMaterial()}/>
                <MsgModal show={msgConfirmRegistro}
                    mensaje="¿Esta seguro que desea eliminar el registro de consumo seleccionado? Esta operación es irreversible."
                    handlerCancel={handlerMsgModalCancel}
                    handlerAccept={handlerMsgModalAccept}
                />
           </div>
        </>
    );
}

export default RegistProduccion;