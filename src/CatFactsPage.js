import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useParams
} from 'react-router-dom';

import CatFactList from './CatFactList';

class SingleCatFactFetcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        SingleCatFactFetcher {this.props.factId}
      </div>
    );
  }

  componentDidMount() {

  }
}

const SingleCatFact = () => {
  let { catFactId } = useParams();

  return <SingleCatFactFetcher factId={catFactId} />
};

const CatFactsPage = () => {
  let match = useRouteMatch();

  return (
    <div>
      Cat facts page

      <Switch>
          <Route path={`${match.url}/:catFactId`} >
            <SingleCatFact />
          </Route>

          <Route path={match.url} >
            <CatFactList />
          </Route>
      </Switch>
    </div>
  );
}


export default CatFactsPage;
