import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FaExclamationCircle } from 'react-icons/fa';
import './style.css';

function MensajeModal(props: {show: boolean, mensaje: string, handlerCancel: any, handlerAccept: any}) {

  return (
      <div>
            <Modal show={props.show} centered={true} >
                <Modal.Header >
                    <Modal.Title className='mx-auto'>
                        <h1 className='text-danger'>(<FaExclamationCircle/>)</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-auto modalBody'>
                    <label >{props.mensaje}</label>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" className="mx-auto btn-danger" onClick={() => props.handlerCancel()}>
                        Cancelar
                    </Button>
                    <Button type="button" className="mx-auto btn-success" onClick={() => props.handlerAccept()}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
      </div>
  );
}

export default MensajeModal;