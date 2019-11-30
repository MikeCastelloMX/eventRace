import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Table from './components/Table';
import Users from './components/Users';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Container from './components/Container';
import  FAQ from './components/FAQ';

function App() {
  const [open, toggleOpen] = React.useState(true)

  const defaultClasses = "kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--static kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed"

  return (
    <div className={open ? defaultClasses : `${defaultClasses} kt-aside--minimize`}>
      <div className="kt-grid kt-grid--hor kt-grid--root">
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
          <Sidebar open={open} toggleOpen={toggleOpen} />
          <Main>
            <FAQ/>
          </Main>
        </div>
      </div>
    </div>
  )
}

export default App;
