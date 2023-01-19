import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import MsgModal from "../../../components/MsgModal";
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
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$10.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$20.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$30.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$40.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$50.000", "En Proceso"]

];

const RegistroConsumo = () => {

    const [msgConfirmRegistro, setMsgConfirmRegistro] = useState(false);
    const [itemD, setItemD] = useState(0);

    const handlerDeleteRegistroConsumo = (idx: number) =>{
        setItemD(idx);
        setMsgConfirmRegistro(true);
    }

    const handlerMsgModalCancel = () =>{
        
        setMsgConfirmRegistro(false);
    } 
    
    const handlerMsgModalAccept = () =>{
        
        detalles.splice(itemD, 1);
        setMsgConfirmRegistro(false);
    }    

    return(
        <>
           <div className="">   
                <div id="filtro" className="container-fluid " style={{backgroundColor: "white"}}>
                    <form className='row p-3 fw-bold'>
                        <div className="col-12">
                            <label htmlFor="nconsumo" className="form-label">N° Consumo</label>
                            <input type="text" className="form-control" id="fdenconsumosde" placeholder="Número de consumo" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="fechaConsumo" className="form-label">Fecha</label>
                            <input type="date" className="form-control" id="fechaConsumo" placeholder="" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="hora" className="form-label">Hora</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="linea" className="form-label">Línea</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="maquina" className="form-label">Máquina</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="truno" className="form-label">Turno</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="jefeturno" className="form-label">Jefe turno</label>
                            <Select/>
                        </div>                  
                    </form>
                    <hr />
                    <form className=' row p-3 fw-bold'>
                        <label  className='mb-2'><h5 className='fw-bold' >Detalle consumo</h5></label>
                        <div className="col-3">
                            <label htmlFor="nconsumo" className="form-label">N° Consumo</label>
                            <input type="text" className="form-control" id="fdenconsumosde" placeholder="N° de consumo" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="fechaConsumo" className="form-label">Fecha</label>
                            <input type="date" className="form-control" id="fechaConsumo" placeholder="" />
                        </div>
                        <div className="col-2">
                            <label htmlFor="hora" className="form-label">Hora</label>
                            <Select/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="linea" className="form-label">Línea</label>
                            <Select/>
                        </div>
                        <div className="col-2 ">
                            <Button className="btn-success  rounded-pill" style={{width: "100%"}}>Agregar</Button>
                        </div>
                        <Tabla 
                            header=""
                            columHeader={["N° Consumo", "Fecha", "Hora", "Centro","Máquina", "Turno", "Jefe Turno", "Operador"]}
                            data={detalles}
                            handlerDelete={handlerDeleteRegistroConsumo}
                        />
                        <div className="container-fluid text-start">
                            <a href="#!" style={{color: "white"}} className="btn btn-success rounded-pill">Descargar XLS </a> 
                        </div> 
                    </form>
                </div>
                <MsgModal show={msgConfirmRegistro}
                    mensaje="¿Esta seguro que desea eliminar el registro de consumo seleccionado? Esta operación es irreversible."
                    handlerCancel={handlerMsgModalCancel}
                    handlerAccept={handlerMsgModalAccept}
                />
           </div>
        </>
    );
}

export default RegistroConsumo;