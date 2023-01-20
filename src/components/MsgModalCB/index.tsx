import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
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
                            <input type="text" className="form-control" id="oc" placeholder="" />
                        </div>              
                    </form>
                </Modal.Body>
                <Modal.Footer className='mx-auto'>
                    <Button type="button" className="ms-3 btn-md btn-success" onClick={() => props.handlerAccept()}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
      </div>
  );
}

export default MensajeModalCB;