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

const EditarMaterial = () => {

    return(
        <>
           <div className="">   
                <div id="filtro" className="container-fluid " style={{backgroundColor: "white"}}>
                <form className='row p-3'>
                    <div className="col-4">
                        <label htmlFor="family" className="form-label">Familia </label>
                        <Select/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="subFamily" className="form-label">Sub Familia </label>
                        <Select/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="material" className="form-label">Material </label>
                        <Select/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="espe" className="form-label">Espesor </label>
                        <Select/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="ancho" className="form-label">Ancho </label>
                        <Select/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="largo" className="form-label">Largo </label>
                        <Select/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="cantidad" className="form-label">Cantidad </label>
                        <Select/>
                    </div>
                </form>
                </div>
           </div>
        </>
    );

}

export default EditarMaterial;