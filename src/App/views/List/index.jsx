import React from 'react';
import { Breadcumbs } from 'App/molekuls';
import { ListEntry } from 'App/Includes';

function List(props) {
    const listnovel = require('App/listnovel').default
    return (
        <div className="container-fluid section font-12" data-theme={props.theme}>
            <Breadcumbs theme={props.theme} link={props.name} />
            <div className="row mt-1">
                <div className="com-12 col-md-9 px-2">
                    <div className="row">
                        {
                            listnovel.map((data, i) => 
                                <ListEntry key={i} {...data} theme={props.theme} device={props.device} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
