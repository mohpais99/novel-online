import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Breadcumbs(props) {
    const [state, setState] = useState()
    const handleCapital = (data) => {
        var str = data.replace(/-/g, ' ')
        return str.replace(/\w\S*/g, function(txt) {  
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); 
        });
    }
    useEffect(() => {
        const unsubscribe = (data) => {
            const list = new Array()
            data.pathname.split("/").forEach(el => {
                let obj;
                if (el === 'novel') {
                    obj = {
                        to: '/daftar-novel',
                        name: "Novel"
                    }
                } else if (el === '') {
                    obj = {
                        to: '/',
                        name: 'Home'
                    }
                } else {
                    if (el.match(/-/g)) {
                        el = handleCapital(el)
                    }
                    obj = {
                        to: "/" + el,
                        name: el
                    }
                }
                list.push(obj)
            });
            setState(list)
        }
        return unsubscribe(props.location)
    }, [props.location])
    return (
        <div className="row px-2">
            <div className={`col-12 py-2 text-white bg-${props.theme}`} style={{borderRadius:"4px"}}>
                {/* <span className="mr-2">
                    <Link className="text-white" to="/">Beranda</Link>
                </span>
                <span className="mr-2">&gt;</span>
                <span>
                    <b>{props.link}</b>
                </span> */}
                <ul className="breadcrumbs">
                    {
                        state && state.map((data, i) => {
                            if (state.length -1 == i) {
                                return <li key={i}>
                                    <span>{data.name}</span>
                                </li>
                            } else {
                                return <li key={i}>
                                    <Link to={data.to}>{data.name}</Link>
                                </li>
                            }
                            
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Breadcumbs
