import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

import CatFactList from '../components/CatFactList';
import SingleCatFact from '../components/SingleCatFact';

const CatFactsPage = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h1>Cat facts page</h1>

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
