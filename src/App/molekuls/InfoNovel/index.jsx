import React from 'react';

const InfoNovel = ({info, data}) => {
    return (
        <div className="mb-2">
            <div className="h6 mb-0"><b>{info}</b></div>
            <span className="font-14">{data}</span>
        </div>
    );
};

export default InfoNovel;