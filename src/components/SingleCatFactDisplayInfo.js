import React from 'react';

import './SingleCatFactDisplayInfo.css';

const SingleCatFactDisplayInfo = (props) => {
    const {
        used,
        source,
        type,
        deleted,
        id,
        user,
        text,
        createdAt,
        updatedAt,
        v
    } = props;

    return (
        <div className="single-cat-fact-display-info">
            { text }
        </div>
    );
};

export default SingleCatFactDisplayInfo;
