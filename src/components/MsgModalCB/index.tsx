import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {ImBarcode} from "react-icons/im";
import './style.css';

function MensajeModalCB(props: {show: boolean, mensaje: string, handlerAccept: any}) {

  return (
      <div>
            <Modal show={props.show} centered={true} >
                <Modal.Header >
                    <Modal.Title className=' text-center'>
                        {                        
                            props.mensaje
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='row p-3'>
                        <div className="col-12">
                            <textarea rows={5} className="w-100"></textarea>
                        </div>              
                    </form>
                </Modal.Body>
                <Modal.Footer className='mx-auto'>
                    <Button type="button" className="ms-3 btn-md btn btn-success bg-primario " onClick={() => props.handlerAccept()}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
      </div>
  );
}

export default MensajeModalCB;