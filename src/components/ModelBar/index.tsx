import { Button, Col, Modal, Row } from 'react-bootstrap';
import {ImBarcode} from "react-icons/im";

const ModalBarCode = (props: any) => {

    return (
        <>
            <Modal show={props.show} onHide={props.close} centered>
                <Modal.Header className={'p-2'}>
                    <Modal.Title as={'h6'} >{props.title || 'Capturar'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className={'align-items-center justify-content-end'}>
                        <Col sm={12} lg={8} className={'justify-content-end'}>
                            <textarea rows={5} className={'w-100'}></textarea>
                        </Col>
                        <Col sm={12} lg={4}>
                            <ImBarcode size={80} />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer >
                    <Button className='btn btn-success bg-primario ' onClick={props.close}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalBarCode
