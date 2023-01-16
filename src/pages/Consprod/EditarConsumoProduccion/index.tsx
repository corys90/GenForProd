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

const EditarConsumoProduccion= () => {

    return(
        <>
           <div className="border m-1">   
                <div id="filtro" className="container-fluid " style={{backgroundColor: "white"}}>
                <form className='row p-3'>
                    <div className="col-4">
                        <label htmlFor="oc" className="form-label">N° OC: </label>
                        <Select/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="ncon" className="form-label">N° Consumo: </label>
                        <input type="text" className="form-control" id="ncon" placeholder="N° Consumo" />
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
                        <label htmlFor="planta" className="form-label">Planta: </label>
                        <Select/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="centro" className="form-label">Centro: </label>
                        <Select/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="proc" className="form-label">Proceso: </label>
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

export default EditarConsumoProduccion;