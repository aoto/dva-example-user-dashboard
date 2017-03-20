import React from 'react';
import { Router } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/list'));
          cb(null, require('./routes/IndexPage'));
        });
      },
    },
    {
      path: '/users',
      name: 'UsersPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/users'));
          cb(null, require('./routes/Users'));
        });
      },
    },
    {
      path: '/page-you-dont-know',
      name: 'PageNotFound',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/PageNotFound'));
        });
      },
    },
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
