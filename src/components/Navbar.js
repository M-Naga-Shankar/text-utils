import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [active, setActive] = useState(0);

  const actives = (value) => {
    setActive(value);
  }

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link onClick={() => actives(1)} className={active === 1 ? 'nav-link active' : 'nav-link'} aria-current="page" to="/">Tools</Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => actives(2)} className={active === 2 ? 'nav-link active' : 'nav-link'} to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
