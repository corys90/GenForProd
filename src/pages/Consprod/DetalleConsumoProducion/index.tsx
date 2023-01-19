import { Form } from "react-bootstrap";
import Tabla from "./Tabla";

const detalles: string[][] = [
    ["Baño", "Quimico TP:XXX", "01-01-2023", "En Proceso"],
    ["Empalillado", "Automático", "01-01-2023", "En Proceso"],
    ["Secado", "HT", "01-01-2023", "Pendiente"],
    ["Desempalillado", "Manual", "01-01-2023", "Ejecutado"],
    ["Cepillado", "2 Caras", "01-01-2023", "En Proceso"]

];

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

const DetalleConsumoProducion = () => {

    return(
        <>
           <div className=" m-1">   
                <div id="filtro" className="container-fluid fw-bold" style={{backgroundColor: "white"}}>
                    <form className='row p-3'>
                        <div className="col-4">
                            <label htmlFor="nlote" className="form-label">N° Lote</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="nconsumo" className="form-label">Material</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="cantidad" className="form-label">Cantidad</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="espesor" className="form-label">Espesor</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="ancho" className="form-label">Acho</label>
                            <Select/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="largo" className="form-label">Largo</label>
                            <Select/>
                        </div>              
                    </form>
                    <Tabla className="mt-2" header=""
                        columHeader={["N° Lote", "BAEMPAQ00902", "Fecha", "Estado"]}
                        data={detalles}
                    />
                    <form className='row p-3'>
                        <div className="col-6">
                            <label htmlFor="fecha" className="form-label">Fecha</label>
                            <input type="date" className="form-control" id="fecha" placeholder="" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="proceso" className="form-label">Proceso</label>
                            <Select/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="hora" className="form-label">Hora</label>
                            <input type="date" className="form-control" id="fecha" placeholder="" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="descripcion" className="form-label">Descripción</label>
                            <Select/>
                        </div>              
                    </form>                    
                </div>
           </div>        
        </>            
    );
}

export default DetalleConsumoProducion;