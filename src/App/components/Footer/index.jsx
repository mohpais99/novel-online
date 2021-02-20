import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'Assets/Images/logo/logo.png';
import './style.css';

function Footer(props) {
    const date = new Date().getFullYear()
    const themeBg = "bg-"+ props.theme
    return (
        <>
            <footer className={`site-footer ${themeBg} mt-4`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img src={logo} alt="logo" width="120" />
                        </div>
                    </div>
                    <div className="row justify-content-center d-none d-md-flex">
                        <div className="col-6 py-2 d-flex justify-content-center text-center">
                            <Link className="icon mr-2" to="/">
                                <FontAwesomeIcon className="" icon={['fab', 'facebook-f']} />
                            </Link>
                            <Link className="icon mr-2" to="/">
                                <FontAwesomeIcon className="font-16" icon={['fab', 'instagram']} />
                            </Link>
                            <Link className="icon mr-2" to="/">
                                <FontAwesomeIcon className="font-16" icon={['fab', 'discord']} />
                            </Link>
                            <Link className="icon" to="/">
                                <FontAwesomeIcon className="" icon={['fab', 'facebook-f']} />
                            </Link>
                        </div>
                    </div>
                    <div className="row justify-content-center my-2">
                        <div className="col-auto border-right text-white">
                            Donasi
                        </div>
                        <div className="col-auto border-right text-white">
                            Contact Us
                        </div>
                        <div className="col-auto border-right text-white">
                            Cookie policy
                        </div>
                        <div className="col-auto text-white">
                            Request Novel
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright w-100 text-center py-2">
                <p className="mb-0">© {date} TNovel Inc. All rights reserved</p>
            </div>
        </>
    )
}

export default Footer
