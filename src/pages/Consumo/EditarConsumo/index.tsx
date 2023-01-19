import { Button, Form } from "react-bootstrap";

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

const EditarConsumo = () => {

    return(
        <>
           <div className=" m-1">   
                <div id="filtro" className="container-fluid fw-bold" style={{backgroundColor: "white", textAlign: "left"}}>
                    <form className='row p-3'>
                        <div className="col-4">
                            <label htmlFor="nconsumo" className="form-label">N° Consumo</label>
                            <input type="text" className="form-control" id="fdenconsumosde" placeholder="Número de consumo" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="fDesde" className="form-label">Fecha</label>
                            <input type="date" className="form-control" id="fDesde" placeholder="" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="fHasta" className="form-label">Hora</label>
                            <input type="date" className="form-control" id="fHasta" placeholder="" />
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
                            <label htmlFor="operador" className="form-label">Turno</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="turno" className="form-label">Jefe Turno</label>
                            <Select/>
                        </div>                 
                    </form>
                </div>
           </div>
        </>
    );

}

export default EditarConsumo;