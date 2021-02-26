import { DetailEntry } from 'App/Includes';
import { Breadcumbs } from 'App/molekuls';
import React, { useState, useEffect } from 'react';

const filterData = (params) => {
    const listnovel = require('App/listnovel').default
    const filteredElements = listnovel.filter(e => e.slug.includes(params))
    return filteredElements
}

function Detail(props) {
    const [loading, setLoading] = useState(true)
    const [detail, setdetail] = useState()
    useEffect(() => {
        const {params} = props.match.params
        const unsubscribe = filterData(params)
        if(unsubscribe.length > 0 ) {
            setLoading(false)
            return setdetail(unsubscribe[0])
        }
        return () => unsubscribe
    }, [])
    return (
        <div className="container-fluid section font-12">
            {
                loading ?
                    <div className="col-12 py-5 text-center">
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
                    <>
                        <Breadcumbs theme={props.theme} location={props.location} link={detail.title} />
                        <DetailEntry data={detail} {...props} />
                    </>
            }
        </div>
    )
}

export default Detail
