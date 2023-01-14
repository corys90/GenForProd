import Modal from 'react-bootstrap/Modal';
import '../modal/style.css';
const logo = require('../modal/Vector.png');

function MensajeModal(props: {show: boolean, mensaje: string, email: string, handlerHide: any}) {

  return (
      <div>
            <Modal show={props.show} centered={true} >
                <Modal.Header >
                    <Modal.Title className='mx-auto'>
                        <img src={logo} alt="" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-auto modalBody'>
                    <label >{props.mensaje}</label>
                    <strong>{props.email}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="mx-auto btnModalReset" onClick={() => props.handlerHide()}>
                        Aceptar
                    </button>
                </Modal.Footer>
            </Modal>
      </div>
  );
}

export default MensajeModal;