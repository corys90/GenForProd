import { Form } from "react-bootstrap";

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

const EditarProduccion= () => {

    return(
        <>
           <div className=" m-1">   
                <div id="filtro" className="container-fluid fw-bold" style={{backgroundColor: "white", textAlign: "left"}}>
                <form className='row p-3'>
                    <div className="col-4">
                        <label htmlFor="prod" className="form-label">N° Producción: </label>
                        <input type="text" className="form-control" id="prod" placeholder="Número de consumo" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="fecha" className="form-label">Fecha: </label>
                        <input type="date" className="form-control" id="fecha" placeholder="" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="hora" className="form-label">Hora: </label>
                        <input type="date" className="form-control" id="hora" placeholder="" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="proc" className="form-label">Proceso: </label>
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
                        <label htmlFor="operador" className="form-label">Turno: </label>
                        <Select/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="turno" className="form-label">Jefe Turno: </label>
                        <Select/>
                    </div>                 
                </form>
                </div>
           </div>
        </>
    );

}

export default EditarProduccion;