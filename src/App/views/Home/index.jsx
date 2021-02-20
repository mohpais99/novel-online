import React, { useEffect, useState } from 'react';
import { Banner } from 'App/components';
import { NovelEntry } from 'App/Includes';
import './style.css';

function Home(props) {
    const listnovel = require('App/listnovel').default;
    const [loading, setloading] = useState(true)
    const [slides, setslides] = useState(0)

    useEffect(() => {
        const unsubscribe = (device) => {
            setloading(false)
            if (device === "desktop") {
                return setslides(6)
            } else if (device === "tablet") {
                return setslides(3)
            } else {
                return setslides(2)
            }
        }
        unsubscribe(props.device)
    }, [props.device])
    return (
        <div className="container-fluid section font-12" data-theme={props.theme}>
            <Banner list={listnovel} {...props} />
            <div className="row mt-3 content">
                <div className="col-12">
                    <div className="h5 section__title">Rekomendasi Novel</div>
                    <hr className="mt-1"/>
                </div>
                <div className="col-12 text-center">
                    {
                        loading ?
                            <div className="w-100 text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        :
                            <NovelEntry slides={slides} novel={listnovel} {...props} />
                    }
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <div className="h5 section__title">Novel Ongoing</div>
                    <hr className="mt-1"/>
                </div>
                <div className="col-12">
                    {
                        loading ?
                            <div className="w-100 text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        :
                            <NovelEntry slides={slides} novel={listnovel} {...props} />
                    }
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <div className="h5 section__title">Novel Complete</div>
                    <hr className="mt-1"/>
                </div>
                <div className="col-12">
                    {
                        loading ?
                            <div className="w-100 text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        :
                            <NovelEntry slides={slides} novel={listnovel} {...props} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
