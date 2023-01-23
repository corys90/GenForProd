import { Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

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

const FiltroConsumo = () => {

    return(
        <>
            <form className='row p-3 '>
                    <label htmlFor="filtro" className="mb-4 fw-bold" >Filtro Consumo</label>  
                    <div className="col-3">
                        <label htmlFor="fDesde" className="form-label ">Fecha Desde</label>
                        <input type="date" className="form-control" id="fDesde" placeholder="" />
                    </div>
                    <div className="col-3">
                        <label htmlFor="nconsumo" className="form-label ">N° Consumo</label>
                        <input type="text" className="form-control" id="fdenconsumosde" placeholder="Número de consumo" />
                    </div>
                    <div className="col-3">
                        <label htmlFor="maquina" className="form-label">Máquina</label>
                        <Select/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="operador" className="form-label ">Operador</label>
                        <Select/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="fHasta" className="form-label ">Fecha Hasta</label>
                        <input type="date" className="form-control" id="fHasta" placeholder="" />
                    </div>
                    <div className="col-3">
                        <label htmlFor="turno" className="form-label ">Turno</label>
                        <input type="text" className="form-control" id="turno" placeholder="Seleccionar" />
                    </div>
                    <div className="col-3">
                        <label htmlFor="jefeturno" className="form-label ">Jefe Turno</label>
                        <Select/>
                    </div>
                    <div className="col-3 ">
                        <label htmlFor="search" className="form-label ">Operador</label>
                        <div className= "" style={{display: "flex", flexDirection: "row"}}>
                            <input type="text" className="form-control" id="search" placeholder="search" />
                            <Button  className="btn btn-success bg-primario ms-3" >Buscar</Button>
                        </div>
                    </div>                    
            </form>                
        </>
    );

}

export default FiltroConsumo;