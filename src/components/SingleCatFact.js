import React from 'react';
import { useParams } from 'react-router-dom';

import SingleCatFactFetcher from './SingleCatFactFetcher';

const SingleCatFact = () => {
    let { catFactId } = useParams();

    return <SingleCatFactFetcher factId={catFactId} />
};

export default SingleCatFact;
