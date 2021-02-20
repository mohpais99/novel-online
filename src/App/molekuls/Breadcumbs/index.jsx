import React from 'react'
import { Link } from 'react-router-dom'

function Breadcumbs(props) {
    return (
        <div className="row px-2">
            <div className={`col-12 py-2 text-white bg-${props.theme}`} style={{borderRadius:"4px"}}>
                <span className="mr-2">
                    <Link className="text-white" to="/">Beranda</Link>
                </span>
                <span className="mr-2">&gt;</span>
                <span>
                    <b>{props.link}</b>
                </span>
            </div>
        </div>
    )
}

export default Breadcumbs
