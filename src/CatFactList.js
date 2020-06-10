import React from 'react';

class CatFactList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'IDLE', // STARTED, SUCCEED, FAILED
            errorMessage: null,
            catFact: [],
        };
    }

    render() {
        return (
            <div>
                Cat fact list
            </div>
        )
    }
}

export default CatFactList;
