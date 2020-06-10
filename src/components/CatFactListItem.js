import React from 'react';
import { Link } from 'react-router-dom';

import './CatFactListItem.css';

const CatFactListItem = (props) => {
    const { id, type, text, user, upvotes } = props;

    return (
        <div className="cat-fact-list-item">
            <div>id: {id}</div>
            <div>type: {type}</div>
            <div>user: {JSON.stringify(user)}</div>
            <div>upvotes: {upvotes}</div>

            <br />
            <br />
            <b>{text}</b>

            <br />
            <br />
            <Link to={`/cat-facts/${id}`}>
                Details
            </Link>
        </div>
    );
};

export default CatFactListItem;
