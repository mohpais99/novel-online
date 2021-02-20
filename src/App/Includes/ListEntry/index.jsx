import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './style.css'

function ListEntry(props) {
    return (
        <div className="col-6 col-md-3 my-2">
            <div className="novel" data-theme={props.theme} data-device={props.device}>
                <div className="novel_thumb">
                    <Link to={`/novel/${props.slug}`}>
                        <img className="shadow" src={props.image} alt="poster-novel" />
                    </Link>
                    <div className="hot_box">
                        <span className="hot-label">BEST SALLER</span>
                    </div>
                </div>
                <div className="novel_content text-center mt-2">
                    <Link className="h6" to={`/novel/${props.slug}`}>
                        {
                            props.title.length > 20 ?
                                props.title.substring(0, 20) + '...'
                            :
                                props.title
                        }
                    </Link>
                    <div className="rating mb-2">
                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                        <FontAwesomeIcon className="on" icon={["fa", "star"]} />
                        <FontAwesomeIcon icon={["fa", "star"]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListEntry
