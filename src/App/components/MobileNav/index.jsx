import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css';
import { useDispatch } from 'react-redux';

function MobileNav(props) {
    const dispatch = useDispatch()
    const handleModal = () => {
        dispatch({type: "MODAL_SHOW", payload: true})
    }
    return (
        <div 
            className="menu-mobile d-md-block d-lg-none py-3" 
            data-theme={props.theme}>
            <div className="col-12">
                <div className="d-flex m-0" style={{justifyContent: 'space-between'}}>
                    <div onClick={handleModal} className="col-auto my-auto">
                        <FontAwesomeIcon icon={["fa", "list"]}/>
                    </div>
                    <div className="col-auto my-auto font" onClick={() => !props.max && props.handleFont('plus')} data-disabled={props.max}>
                        <FontAwesomeIcon icon={["fa", "plus"]}/>
                    </div>
                    <div className="col-auto my-auto font" onClick={() => !props.min && props.handleFont('min')} data-disabled={props.min}>
                        <FontAwesomeIcon icon={["fa", "minus"]}/>
                    </div>
                    <div className="col-auto my-auto">
                        <FontAwesomeIcon icon={["fa", "arrow-left"]}/>
                    </div>
                    <div className="col-auto my-auto">
                        <FontAwesomeIcon icon={["fa", "arrow-right"]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNav
