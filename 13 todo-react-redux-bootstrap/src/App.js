import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Details from './components/Details';

const App = () => (
  <>
    <Header />
    <main role="main" className="flex-shrink-0">
      <div className="container">
        <Search />
        <div className="my-3">
          <Details />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
