/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => (
  <>
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          React-Redux-Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    </header>
  </>
);

export default Header;
