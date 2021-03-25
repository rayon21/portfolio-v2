import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Router } from "components/Router";
import Nav from "components/Nav";
import CircleCursor from "components/CircleCursor";
import Dynamic from "containers/Dynamic";

import "./app.css";
import "./fonts.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <CircleCursor />
      <Nav />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
