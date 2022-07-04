import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "../App.css";
import routes from "./routes";

function App() {
  return (
    <Routes>
      {routes.map(({ component: Component, path, layout: Layout, ...rest }) => {
        let Layouts = Layout

        if(Layout === null){
          Layouts = Fragment
        }

        return (
          (
            <Route
              path={path}
              key={path}
              {...rest}
              element={
                <React.Suspense fallback={"loading..."}>
                  <Layouts>
                    <Component />
                  </Layouts>
                </React.Suspense>
              }
            />
          )
        )
      })}
    </Routes>
  );
}

export default App;
