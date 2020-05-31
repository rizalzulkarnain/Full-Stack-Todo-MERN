import React, { lazy, Suspense, useContext, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Layout from '../src/layout/Layout';
import Spinner from './spinner/Spinner';

import TodosContext from './context/TodosContext';
import TodosReducer from './context/TodosReducer';

import { GlobalStyle } from './globalStyle/GlobalStyle';

const Home = lazy(() => {
  return import('./pages/Home');
});

const Todo = lazy(() => {
  return import('./pages/Todo');
});

const About = lazy(() => {
  return import('./pages/About');
});

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(TodosReducer, initialState);

  return (
    <>
      <TodosContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <Router>
          <GlobalStyle />
          <Layout>
            <Suspense
              fallback={
                <div>
                  <Spinner />
                </div>
              }
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/todo" component={Todo} />
                <Route path="/about" component={About} />
                <Redirect to="/" />
              </Switch>
            </Suspense>
          </Layout>
        </Router>
      </TodosContext.Provider>
    </>
  );
};

export default App;
