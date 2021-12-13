import logo from '../logo.svg';
import './layout.less';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import WeakestLink from './weakest-link';
import Tenable from './tenable';
import Pointless from './pointless';
import Home from './home';

function Layout() {
  return (
    <div>
        <body>
            
            <Router>
                <Routes>
                    <Route path="/tenable" element={<Tenable />} />
                    <Route path="/weakest-link" element={<WeakestLink />} />
                    <Route path="/pointless" element={<Pointless />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </body>
    </div>
  );
}

export default Layout;