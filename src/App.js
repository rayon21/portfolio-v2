import React from "react";
import { Root, Routes } from "react-static";
//
import { Router } from "components/Router";
import Nav from "components/Nav";
import CircleCursor from "components/CircleCursor";
import LoadingIndicator from "components/LoadingIndicator";

import "./app.scss";
import "./fonts.css";

function App() {
  return (
    <Root>
      <CircleCursor />
      <Nav />
      <div className="content">
        <React.Suspense fallback={<LoadingIndicator />}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
