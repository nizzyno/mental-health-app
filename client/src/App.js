import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Home from './pages/Home';
// import Login
// import Signup
// import Profile

// function App() {
//   const httpLink = createHttpLink({
//     uri: '/graphql',
//   });

//   const client = new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache(),

//   });
// const client = new ApolloClient({
//   request: operation => {
//     const token = localStorage.getItem('id_token');

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     });
//   },
//   uri: '/graphql'
// });

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer &{token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/login" component={Login} /> */}
              {/* <Route exact path="/signup" component={Signup} /> */}
              <Route exact path="/profile/:username?" component={Profile} />

              {/* <Route component={NoMatch} /> */}
            </Switch>
            <Home />
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
