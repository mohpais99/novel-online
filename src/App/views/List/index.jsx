import React from 'react';
import { Breadcumbs } from 'App/molekuls';
import { ListEntry } from 'App/Includes';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function List(props) {
    const listnovel = require('App/listnovel').default
    const listchapter = require('App/listchapter').default
    return (
        <div className="container-fluid section font-12" data-theme={props.theme}>
            <Breadcumbs theme={props.theme} location={props.location} />
            <div className="row mt-1">
                <div className="col-12 col-md-9 px-2">
                    <div className="row">
                        {
                            listnovel.map((data, i) => 
                                <ListEntry key={i} {...data} theme={props.theme} device={props.device} />
                            )
                        }
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="row my-2 px-2">
                        <div className={`col-12 bg-${props.theme} text-white`}>
                            <div className="h6 my-3">Update Chapter Terakhir</div>
                        </div>
                        <div className={`col-12 filter bg-${props.theme === 'dark' ? 'secondary' : 'light'}`}>
                            <div className="row">
                                {
                                    listchapter.map((data, i) => 
                                        <div key={i} className="col-12 other-novel" data-theme={props.theme}>
                                            <div className="poster-novel mr-2">
                                                <img src={data.image} alt="poster-novel" className="w-100" />
                                            </div>
                                            <div className="detail-novel pl-1">
                                                <div className="header d-block">
                                                    <Link to={data.slug}>
                                                        <div className="h6 mb-1">{data.title}</div>
                                                    </Link>
                                                    <div className="info font-10 d-flex">
                                                        <div className="chapter mr-2">
                                                            <FontAwesomeIcon icon={["fa", "clipboard-list"]} />
                                                            <span className="ml-1">Chapter {data.chapter}</span>
                                                        </div>
                                                        <div className="time">
                                                            <FontAwesomeIcon icon={["fa", "clock"]} />
                                                            <span className="ml-1">1 menit yang lalu</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="my-1"/>
                                                <div className="description">
                                                    {data.description}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="row my-2">
                                <div className="col-12">
                                    <button className="w-100 btn btn-primary">
                                        Read More!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
