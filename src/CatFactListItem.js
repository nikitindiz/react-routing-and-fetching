import React from 'react';

import './CatFactListItem.css';

const CatFactListItem = (props) => {
    const { id, type, text, user, upvotes } = props;

    return (
        <div className="cat-fact-list-item">
            <div>id: {id}</div>
            <div>type: {type}</div>
            <div>user: {JSON.stringify(user)}</div>
            <div>upvotes: {upvotes}</div>
            <br/>
            <br/>
            <b>{ text }</b>
        </div>
    );
};

export default CatFactListItem;
