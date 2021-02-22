import React from 'react';
import { Breadcumbs } from 'App/molekuls';
import { ListEntry } from 'App/Includes';
import category from 'Assets/Images/icon/category.svg';
import calendar from 'Assets/Images/icon/calendar.svg';
import sort from 'Assets/Images/icon/option.svg';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function List(props) {
    const listnovel = require('App/listnovel').default
    const listchapter = require('App/listchapter').default
    return (
        <div className="container-fluid section font-12" data-theme={props.theme}>
            <Breadcumbs theme={props.theme} link={props.name} />
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
                        
                        
                        {/* <div className={`col-12 filter bg-${props.theme === 'dark' ? 'secondary' : 'light'}`}>
                            <div className="row">
                                <div className="col-12 py-2 border-bottom">
                                    <div className="header">
                                        <div className="icon" style={{width: "1em"}}>
                                            <img src={category} alt="alt-category" className="w-100" />
                                        </div>
                                        <div className="title">Category</div>
                                    </div>
                                    <div className="custom-control custom-checkbox mt-1">
                                        <input type="checkbox" className="custom-control-input" id="japanese" />
                                        <label className="custom-control-label" htmlFor="japanese" style={{lineHeight: '2'}}>
                                            JAPAN
                                        </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="korea" />
                                        <label className="custom-control-label" htmlFor="korea" style={{lineHeight: '2'}}>
                                            KOREA
                                        </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="china" />
                                        <label className="custom-control-label" htmlFor="china" style={{lineHeight: '2'}}>
                                            CHINA
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 py-2 border-bottom">
                                    <div className="header">
                                        <div className="icon" style={{width: "1em"}}>
                                            <img src={sort} alt="alt-category" className="w-100" />
                                        </div>
                                        <div className="title">Sort By</div>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="complete" />
                                        <label className="custom-control-label" htmlFor="complete" style={{lineHeight: '2'}}>
                                            Complete
                                        </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="Ongoing" />
                                        <label className="custom-control-label" htmlFor="Ongoing" style={{lineHeight: '2'}}>
                                            Ongoing
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 py-2 border-bottom">
                                    <div className="header">
                                        <div className="icon" style={{width: "1em"}}>
                                            <img src={calendar} alt="alt-category" className="w-100" />
                                        </div>
                                        <div className="title">Publish Date</div>
                                    </div>
                                    <select class="custom-select font-12">
                                        <option selected>Any</option>
                                        <option disabled>-- Select Time --</option>
                                        <option value="1">Last 30 Days</option>
                                        <option value="2">Last 3 months</option>
                                        <option value="3">Last Year</option>
                                    </select>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
