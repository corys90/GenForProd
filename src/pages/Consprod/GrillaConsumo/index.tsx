import { Form } from "react-bootstrap";

const GrillaConsumo = () => {

    return(
        <>
           <div className="border m-1">   
                <label htmlFor="filtro">Filtro Consumo</label>  
                <div id="filtro" className="container-fluid border" style={{backgroundColor: "yellow"}}>
                    <form className='row'>
                        <div className="col-3">
                            <label htmlFor="fDesde" className="form-label">Fecha Desde: </label>
                            <input type="date" className="form-control" id="fDesde" placeholder="" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="nconsumo" className="form-label">N° Consumo: </label>
                            <input type="text" className="form-control" id="fdenconsumosde" placeholder="Número de consumo" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="maquina" className="form-label">Máquina: </label>
                        </div>
                        <div className="col-3">
                            <label htmlFor="operador" className="form-label">Operador: </label>
                        </div>
                        <div className="col-3">
                            <label htmlFor="fHasta" className="form-label">Fecha Hasta: </label>
                            <input type="date" className="form-control" id="fHasta" placeholder="" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="turno" className="form-label">Turno: </label>
                            <input type="text" className="form-control" id="turno" placeholder="Seleccionar" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="jefeturno" className="form-label">Jefe Turno: </label>
                        </div>
                        <div className="col-3">
                            <label htmlFor="search" className="form-label">Operador: </label>
                            <input type="text" className="form-control" id="search" placeholder="search" />
                        </div>                    
                        
                    </form>
                </div>
           </div>
        </>
    );

}

export default GrillaConsumo;