import './style.css';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ModalCustom = (props) => {
    const dispatch = useDispatch()
    const handleModal = () => {
        dispatch({type: "MODAL_SHOW", payload: false})
    }
    const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
        <Modal 
            className="left fade" 
            show={props.show} 
            onHide={handleModal}
            data-theme={props.theme}>
                <Modal.Header closeButton>
                    <Modal.Title className="h6">List Chapter</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    {
                        items.map((num, i) => 
                            <div key={i} className="w-100 border-bottom p-2">Chapter {num}</div>
                        )
                    }
                </Modal.Body>
        </Modal>
    );
};

export default ModalCustom;