import { Button, Container, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Tabla from "../../../components/Tabla";

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
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$50.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$50.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$50.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$50.000", "En Proceso"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$50.000", "En Proceso"]

];

const RegistroConsumo = () => {

    return(
        <>
           <div className="">   
                <div id="filtro" className="container-fluid " style={{backgroundColor: "white"}}>
                    <form className='border row p-3'>
                        <div className="col-12">
                            <label htmlFor="nconsumo" className="form-label">N° Consumo: </label>
                            <input type="text" className="form-control" id="fdenconsumosde" placeholder="Número de consumo" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="fechaConsumo" className="form-label">Fecha: </label>
                            <input type="date" className="form-control" id="fechaConsumo" placeholder="" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="hora" className="form-label">Hora: </label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="linea" className="form-label">Línea: </label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="maquina" className="form-label">Máquina: </label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="truno" className="form-label">Turno: </label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="jefeturno" className="form-label">Jefe turno: </label>
                            <Select/>
                        </div>                  
                    </form>
                    <form className='border row p-3 '>
                        <label htmlFor=""><h6>Detalle consumo</h6></label>
                        <div className="col-3">
                            <label htmlFor="nconsumo" className="form-label">N° Consumo: </label>
                            <input type="text" className="form-control" id="fdenconsumosde" placeholder="N° de consumo" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="fechaConsumo" className="form-label">Fecha: </label>
                            <input type="date" className="form-control" id="fechaConsumo" placeholder="" />
                        </div>
                        <div className="col-2">
                            <label htmlFor="hora" className="form-label">Hora: </label>
                            <Select/>
                        </div>
                        <div className="col-2">
                            <label htmlFor="linea" className="form-label">Línea: </label>
                            <Select/>
                        </div>
                        <div className="col-2 ">
                            <Button className="btn-g btn-success mt-3" style={{width: "100%"}}>Agregar</Button>
                        </div>
                        <Tabla 
                            header=""
                            columHeader={["N° Consumo", "Fecha", "Hora", "Centro","Máquina", "Turno", "Jefe Turno", "Operador"]}
                            data={detalles}
                        />
                        <div className="container-fluid text-start">
                            <a href="#!" style={{color: "white"}} className="btn btn-success">Descargar XLS </a> 
                        </div> 
                    </form>
                </div>
           </div>
        </>
    );
}

export default RegistroConsumo;