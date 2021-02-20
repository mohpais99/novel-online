import React, { useState } from 'react';
import logo from 'Assets/Images/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';

function Navigation(props) {
    const history = useHistory()
    const genre = require('App/genre.json');
    const [search, setsearch] = useState(false);
    const themeNavbar = "navbar-"+ props.theme;
    const themeBg = "bg-"+ props.theme;
    return (
        <div className="navigation">
            <nav className={`navbar navbar-expand-lg ${themeNavbar + ' ' + themeBg}`} data-theme={props.theme}>
                <div className="container-fluid">
                    <Link className="navbar-brand px-2" to="/">
                        <img src={logo} alt="my-logo" width="70" height="40" />
                    </Link>
                    <div className="navbar-collapse d-none d-lg-block">
                        <ul className="navbar-nav">
                            <li onClick={() => history.push('/')} className="nav-item p-2 active">
                                <FontAwesomeIcon className="mr-2" icon={["fa", "home"]} />
                                <span>Home</span>
                            </li>
                            <li onClick={() => history.push('/daftar-novel')} className="nav-item p-2">
                                <FontAwesomeIcon className="mr-2" icon={["fa", "clipboard-list"]} />
                                Daftar Novel
                            </li>
                            <li className="nav-item p-2">
                                <FontAwesomeIcon className="mr-2" icon={["fa", "fire-alt"]} />
                                Hot Novel
                            </li>
                        </ul>
                    </div>
                    <div className="menu-right ml-auto">
                        <button onClick={() => setsearch(!search)} className="text-center mr-2">
                            <FontAwesomeIcon icon={["fa", "search"]} />
                        </button>
                        <button 
                            onClick={() => {
                                props.handleThemeClick(props.theme === "primary" ? "dark" : "primary");
                            }} 
                            className="text-center mr-2">
                                {
                                    props.theme === 'primary' ?
                                        <FontAwesomeIcon icon={["fa", "moon" ]} />
                                    :
                                        <FontAwesomeIcon icon={["fa", "sun" ]} />
                                }
                        </button>
                        <button 
                            onClick={() => {
                                props.handleSidebarClick(true);
                            }}
                            className="text-center">
                                <FontAwesomeIcon icon={["fa", "user"]} />
                        </button>
                    </div>
                </div>
            </nav>
            <div className="container-fluid genre d-none d-md-block" data-theme={props.theme}>
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            className="pb-2"
                            slidesPerView={10}
                            spaceBetween={2}
                            scrollbar={{ draggable: true }}>
                                {
                                    genre.map((data, i) =>
                                        <SwiperSlide key={i} className="font-14 py-1 text-center">
                                            <Link  to="/" style={{fontWeight: "600"}}>
                                                {data}
                                            </Link>
                                        </SwiperSlide>
                                    )
                                }
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className={`w-100 search ${themeBg} ${search ? 'active': ''}`} data-theme={props.theme}>
                <button onClick={() => setsearch(!search)} className="ml-1 btn btn-sm">
                    <FontAwesomeIcon icon={["fa", "arrow-left"]} />
                </button>
                <form className="col pl-0 my-auto">
                    <input className="input-transparent" type="search" placeholder="Cari Novel ..."/>
                </form>
            </div>
        </div>
    )
}

export default Navigation
