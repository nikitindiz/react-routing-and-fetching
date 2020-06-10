import React from 'react';

class CatFactList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'IDLE', // STARTED, SUCCEED, FAILED
            errorMessage: null,
            catFacts: [],
        };
    }

    render() {
        const { status, catFacts } = this.state;

        return (
            <div>
                {status === 'IDLE' && (
                    <div>
                        Component has being mount
                        and will start fetching in a moment
                    </div>
                )}

                {status === 'STARTED' && (
                    <div>
                        Loading...
                    </div>
                )}

                {status === 'SUCCEED' && (
                    <div>
                        { catFacts.length } facts downloaded
                    </div>
                )}

                {status === 'FAILED' && (
                    <div style={{ backgroundColor: 'red' }}>
                        Cat facts fetching failed
                    </div>
                )}
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            status: 'STARTED',
            errorMessage: null
        }, () => {
            fetch('https://cat-fact.herokuapp.com/facts')
                .then(response => {
                    return response.json();
                })
                .then(catFactsList => {
                    this.setState({
                        catFacts: catFactsList.all,
                        status: 'SUCCEED'
                    });
                })
                .catch((error) => {
                    this.setState({
                        status: 'FAILED',
                        errorMessage: error.message,
                    })
                });
        })
    }
}

export default CatFactList;
