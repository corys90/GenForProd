import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
//import { FaExclamationCircle } from 'react-icons/fa';
import './style.css';

function MensajeModal(props: {show: boolean, mensaje: string, handlerCancel: any, handlerAccept: any}) {

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
                <Modal.Footer className='mx-auto'>
                        <Button type="button" className="btn-md btn-secondary me-3" onClick={() => props.handlerCancel()}>
                            Cancelar
                        </Button>
                        <Button type="button" className="ms-3 btn-md btn-success" onClick={() => props.handlerAccept()}>
                            Aceptar
                        </Button>
                </Modal.Footer>
            </Modal>
      </div>
  );
}

export default MensajeModal;