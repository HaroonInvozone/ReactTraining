import React from "react";

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Counter">Counter</Link>
          </li>
          <li>
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/CustomHook">Custome Hook Implementation</Link>
          </li>
          <li>
            <Link to="/CountDown">Headless Component</Link>
          </li>
          <li>
            <Link to="/pageHC1">Headless Component 1</Link>
          </li>
          <li>
            <Link to="/pageHC2">Headless Component 2</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;