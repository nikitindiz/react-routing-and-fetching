import React from 'react';

import SingleCatFactDisplayInfo from './SingleCatFactDisplayInfo';

export default class SingleCatFactFetcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'IDLE', // STARTED, SUCCEED, FAILED,
            errorMessage: null,
            fact: null,
        };
    }

    render() {
        const { status, fact } = this.state;

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
                        <SingleCatFactDisplayInfo
                            used={fact.used}
                            source={fact.source}
                            type={fact.type}
                            deleted={fact.deleted}
                            id={fact._id}
                            user={fact.user}
                            text={fact.text}
                            createdAt={fact.createdAt}
                            updatedAt={fact.updatedAt}
                            v={fact.__v}
                        />
                    </div>
                )}

                {status === 'FAILED' && (
                    <div style={{ backgroundColor: 'red' }}>
                        Cat facts fetching failed
                    </div>
                )}
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            status: 'STARTED',
            errorMessage: null
        }, () => {
            fetch(`https://cat-fact.herokuapp.com/facts/${this.props.factId}`)
                .then(response => {
                    return response.json();
                })
                .then(catFact => {
                    this.setState({
                        fact: catFact,
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