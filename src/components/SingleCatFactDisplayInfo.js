import React from 'react';

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
        <div>
            { text }
        </div>
    );
};

export default SingleCatFactDisplayInfo;
